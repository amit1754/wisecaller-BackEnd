import { Types } from "mongoose";

import { Request, Response } from "express";
import { customStatus } from "../models/customStatus";

import moment from "moment";
class customStatusController {
  async removeStatus(request: Request, response: Response) {
    try {
      let dateFrom = moment().subtract(process.env.CALLHISTORYDAYS, "d");
      
      const all_status = await customStatus.find({
        end_date: { $lte: dateFrom },
      });

      for (let i = 0; i < all_status.length; i++) {
        await customStatus.findByIdAndRemove(all_status[i]._id);
      }
      response
        .status(200)
        .json({ success: true, message: "success" });
    } catch (err) {
      response.status(500).json({ success: false, message: "failed" });
    }
  }
}
export default customStatusController;
