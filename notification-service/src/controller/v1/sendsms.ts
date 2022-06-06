import { Request, Response } from "express";
require("dotenv").config();
import smsSendMiddelware from "../../middlewares/smsSendMiddelware";
import { MobileNoCheckUtils } from "../../utils";
import { logError } from "@wisecaller/logger";

class SMSController {
  async sendSMS(req: Request, res: Response) {
    try {
      const { mobileNo, message } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo)
        return res.status(400).json({ error: "Mobile number is not valid" });
      const response: any = smsSendMiddelware(mobileNo, message);
      if (response) {
        res
          .status(200)
          .send({ success: true, message: "message send successfully" });
      } else {
        return res.status(502).json({ error: "Message not send" });
        throw new Error("message not send");
      }
    } catch (error) {
      logError(error, req, res);
    }
  }
}
export default SMSController;
