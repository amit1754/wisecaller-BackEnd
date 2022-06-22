import { Request, Response } from "express";
import { UserStatus } from "../../models/user-status";

class UserStatusController {
  async index(req: Request, res: Response) {
    try {
      let sort_key = req.body.sort_key || "order";
      let sort_direction = req.body.sort_direction === "DESC" ? -1 : 1;
      let criteria = {};

      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
      };

      if (req.body.search) {
        Object.assign(criteria, {
          status: { $regex: req.body.search, $options: "i" },
        });
      }

      const user_statuses =
        req.body.page || req.body.limit
          ? await UserStatus.paginate(criteria, options)
          : await UserStatus.find(criteria);
      return res.status(200).json({ success: true, data: user_statuses });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let payload: any = {
        ...req.body,
      };

      let user_status: any = {};

      if (payload.isDeleted) {
        user_status = await UserStatus.findOneAndDelete({ _id: payload._id });
      } else {
        if (payload._id) {
          user_status = await UserStatus.findOneAndUpdate(
            { _id: payload._id },
            payload,
            { upsert: true, new: true }
          );
        } else {
          let user_status = new UserStatus(payload);
          await user_status.save();
        }
      }
      return res.status(200).json({ success: true, data: user_status });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default UserStatusController;
