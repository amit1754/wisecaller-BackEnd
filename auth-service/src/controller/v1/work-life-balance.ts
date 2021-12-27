import { Request, Response } from "express";
import { WorkLifeBalance } from "../../models/work-life-balance";
import {getUserBll,getStatusBll} from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";

class WorkLifeBalanceController {
  async update(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      let payload = {
        ...req.body,
        user: loggedInUser._id,
      };
      let updated_work_life: any = {};
      let user = await getUserBll.findOneUserLean({ _id: loggedInUser._id });

      if (payload.is_deleted) {
        await WorkLifeBalance.findOneAndRemove({ user: loggedInUser._id });
        updated_work_life = null;
      } else {
        updated_work_life = await WorkLifeBalance.findOneAndUpdate(
          { user: loggedInUser._id },
          payload,
          { upsert: true, new: true }
        );
        let status = await getStatusBll.getSubStatusByPayload({
          _id: updated_work_life.status,
        });
        let sub_status = await getStatusBll.getSubStatusByPayload({
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

      await getUserBll.findOneAndUpdate(loggedInUser._id,{ modes: user_payload },{ upsert: true, new: true });
      return res.status(200).json({ success: true, data: updated_work_life });
    } catch (error: any) {
      return logError(error,req,res);
    }
  }
}

export default WorkLifeBalanceController;
