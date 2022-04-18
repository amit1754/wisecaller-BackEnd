import { Request, Response } from "express";
import moment from "moment";
import { Usage } from "../../models/usage";

export default class UsageController {
  async update(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.body.user;
      let isExist = await Usage.findOne({
        loggedOn: {
          $gte: moment().startOf("day").utc(true).toDate(),
          $lte: moment().endOf("day").utc(true).toDate(),
        },
        user: loggedInUser._id,
      });

      if (!isExist) {
        let usage = new Usage({ user: loggedInUser._id });
        await usage.save();
      }
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}
