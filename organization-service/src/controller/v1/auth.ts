import { NextFunction, Request, Response } from "express";
import { Organization } from "../../models/organization";
import { Iorganization } from "../../interface/organization";
import { MobileNoCheckUtils, jwtVerify } from "../../utils";
import SNSClient from "@wisecaller/sns";
import { getUserBll, getauthTokenBll } from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";
import jwt from "jsonwebtoken";
class AuthController {
  async create(req: Request, res: Response) {
    try {
      let payload: Iorganization = {
        ...req.body,
      };
      let checkPhoneNo: any = MobileNoCheckUtils.verify(req.body.phone_no);
      if (checkPhoneNo) {
        let saveOrganization = new Organization(payload);
        await saveOrganization.save();

        return res.status(200).json({ success: true });
      } else {
        throw new Error("phone number is invalid");
      }
    } catch (error: any) {
      if (error.code === 11000) {
        error.message = error.keyValue.email
          ? "email is already in used"
          : "phone_no is already in used";
        res.status(200).json({ success: false, message: error.message });
      } else res.status(200).json({ success: false, message: error.message });
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      let bodyData: any = req.body;
      let checkPhoneNo: any = MobileNoCheckUtils.verify(bodyData.phone_no);
      if (checkPhoneNo) {
        next();
      } else {
        throw new Error("phone number is not valid");
      }
    } catch (error: any) {
      res.status(200).json({ success: false, message: error.message });
    }
  }
  async generateOtp(req: Request, res: Response) {
    try {
      const otp = Math.floor(1000 + Math.random() * 9000);
      const reqData: any = req.body;

      let payload = {
        otp: otp,
        mobileNo: reqData.phone_no,
      };
      await SNSClient.sendOTP(reqData.mobileNo, otp);
      let token;
      const userOtpDe = await getauthTokenBll.getTokenByPhone(reqData.phone_no);
      if (userOtpDe) {
        token = await getauthTokenBll.findOneAndUpdate(
          reqData.mobileNo,
          { ...payload },
          {
            upsert: true,
            new: true,
          }
        );
      } else {
        token = await getauthTokenBll.createToken(payload);
      }

      return res.status(200).json({
        success: true,
        message: "message send successful",
        otp: token.otp,
      });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async verifyOtp(req: Request, res: Response) {
    try {
      const { phone_no, otp } = req.body;

      let userDetails: any;
      userDetails = await Organization.findOne({ phone_no: phone_no });

      let auth_token: any = await getauthTokenBll.getTokenByPhone(phone_no);

      if (auth_token) {
        let secret: any = process.env.JWT_SECRET,
          tokenTime: any = process.env.TOKENTIME,
          tokenRefreshTime = process.env.REFRESHTOKENTIME;

        let token = jwt.sign(
          { _id: userDetails.id, mobileNo: userDetails.phone_no },
          secret,
          { expiresIn: tokenTime }
        );
        const refreshToken = jwt.sign(
          { _id: userDetails.id, mobileNo: userDetails.phone_no },
          secret,
          { expiresIn: tokenRefreshTime }
        );
        let verify: any = await jwtVerify(token);
        let time: number = verify.exp;
        let token_expires_at: any = new Date(time * 1000);

        await auth_token.remove();
        return res.status(200).json({
          success: true,
          data: {
            token,
            refreshToken,
            token_expires_at,
          },
        });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "Otp is invalid" });
      }
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
}

export default AuthController;
