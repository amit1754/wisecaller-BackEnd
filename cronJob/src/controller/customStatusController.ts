
import { Types } from "mongoose";

import { Request, Response } from "express";
import { User } from "../models/user.model";
import { CallHistory } from "../models/callHistory";
import moment from "moment";
class customStatusController {
  async removeStatus(request: Request, response: Response) {
    try {
      // create data before days
      let dateFrom = moment().subtract(process.env.CALLHISTORYDAYS, "d");

      // find the records before the days
      let callHistory = await CallHistory.find({
        time: { $lte: dateFrom },
      });
      // remove the data
      for (let i = 0; i < callHistory.length; i++) {
        await CallHistory.findByIdAndRemove(callHistory[i]._id);
      }
      
      response.status(200).json({ success: true, message: "success" });
    } catch (err) {
      response.status(500).json({ success: false, message: "failed" });
    }
  }
}
export default customStatusController;
