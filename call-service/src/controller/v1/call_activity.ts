import { Request, Response } from "express";
import { CallActivity } from "../../models/call_activity";

export default class CallActivityController {
  async update(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.user;
      let payload = {
        ...req.body,
        user: loggedInUser._id,
        caller: loggedInUser._id,
      };
      let call_activity = new CallActivity(payload);
      call_activity.save();
      return res.status(200).json({ success: true, data: call_activity });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}