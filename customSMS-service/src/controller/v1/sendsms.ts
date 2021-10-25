import { Request, Response, NextFunction } from "express";
require("dotenv").config();
import smsSendMiddelware from '../../middlewares/smsSendMiddelware'
import { MobileNoCheckUtils } from '../../utils'
const AWS = require("aws-sdk");

class SMSController {
    async sendSMS(req: Request, res: Response) {
        try {
            const { mobileNo, message } = req.body
            const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo)
            if (!checkMobileNo) throw new Error("mobile number is not valid")
            const response: any = smsSendMiddelware(mobileNo, message)
            if (response) {
                res.status(200).send({ success: true, message: "message send successfully" })
            }
            else {
                throw new Error("message not send")
            }
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })

        }


    }
}
export default SMSController;
