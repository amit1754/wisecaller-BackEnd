import { Request, Response } from "express";
import { User } from "../../models/user";
import { WorkLifeBalance } from "../../models/work-life-balance";
import { UserStatus } from "../../models/status";
import { UserSubStatus } from "../../models/subStatus";

class WorkLifeBalanceController {
  async update(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      let payload = {
        ...req.body,
        user: loggedInUser._id,
      };
      let updated_work_life: any = {};
      let user = await User.findOne({ _id: loggedInUser._id }).lean();

      if (payload.is_deleted) {
        await WorkLifeBalance.findOneAndRemove({ user: loggedInUser._id });
        updated_work_life = null;
      } else {
        updated_work_life = await WorkLifeBalance.findOneAndUpdate(
          { user: loggedInUser._id },
          payload,
          { upsert: true, new: true }
        );
        let status = await UserStatus.findOne({
          _id: updated_work_life.status,
        });
        let sub_status = await UserSubStatus.findOne({
          _id: updated_work_life.sub_status,
        });

        Object.assign(updated_work_life, {
          status: status,
          sub_status: sub_status,
        });
      }

      let user_payload = {
        ...user.modes,
        workLifeBalance: {
          is_active: req.body.is_deleted ? false : req.body.is_active,
          data: updated_work_life,
        },
      };

      await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        { modes: user_payload },
        { upsert: true, new: true }
      );
      return res.status(200).json({ success: true, data: updated_work_life });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default WorkLifeBalanceController;
