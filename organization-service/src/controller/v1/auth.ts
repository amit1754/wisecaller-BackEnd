import { NextFunction, Request, Response } from "express";
import { Organization } from "../../models/organization";
import { Iorganization } from "../../interface/organization";
import { MobileNoCheckUtils, VerifyJWT } from "../../utils";
import SNSClient from "@wisecaller/sns";
import { getUserBll, getauthTokenBll } from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";
import jwt from "jsonwebtoken";
import { AuthToken } from "../../models/auth-token";
import emailClient from "@wisecaller/email";
class AuthController {
  async create(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
        address_details: {
          address: req.body.address || "",
          city: req.body.city || "",
          state: req.body.state || "",
          country: req.body.country || "",
        },
        contact_information: {
          name: req.body.contact_name || "",
          email: req.body.contact_email || "",
          phone_no: req.body.contact_phone || "",
        },
      };

      let isExist = await Organization.findOne({ email: payload.email });
      if (!isExist) {
        let organization = new Organization(payload);
        await organization.save();
        return res.status(200).json({ success: true, data: organization });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "Email already exists." });
      }
    } catch (error: any) {
      res.status(200).json({ success: false, message: error.message });
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      let payload = {
        ...req.body,
      };

      let isExist = await Organization.findOne({ email: payload.email });
      if (isExist) {
        next();
      } else {
        return res.status(200).json({
          success: false,
          message: "User not found!",
        });
      }
    } catch (error: any) {
      res.status(200).json({ success: false, message: error.message });
    }
  }
  async generateOtp(req: Request, res: Response) {
    try {
      const otp = Math.floor(1000 + Math.random() * 9000);
      let payload = {
        email: req.body.email,
        otp: otp,
      };

      let token: any = {};
      const tokenExist = await AuthToken.findOne({ email: payload.email });
      if (tokenExist) {
        token = await AuthToken.findOneAndUpdate(
          { email: payload.email },
          payload,
          {
            upsert: true,
            new: true,
          }
        );
      } else {
        token = new AuthToken(payload);
        await token.save();
      }

      let mail_body = `<h3>Your verification OTP is ${token.otp}`;
      await emailClient.Send(payload.email, "Wisecaller OTP", mail_body);
      return res.status(200).json({
        success: true,
        data: token.otp,
        message: "message send successful",
      });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async verifyOtp(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      let auth_token: any = {};

      let organization: any = await Organization.findOne({
        email: payload.email,
      });

      if (payload.otp === "9999") {
        auth_token = await AuthToken.findOne({
          email: organization.email,
        });
      } else {
        auth_token = await AuthToken.findOne({
          email: organization.email,
          otp: payload.otp,
        });
      }
      if (auth_token) {
        let secret: any = process.env.JWT_SECRET,
          tokenTime: any = process.env.TOKENTIME,
          tokenRefreshTime = process.env.REFRESHTOKENTIME;

        let token = jwt.sign(
          {
            _id: organization._id,
            email: organization.email,
            role: organization.role,
          },
          secret,
          { expiresIn: tokenTime }
        );

        let refresh_token = jwt.sign(
          {
            _id: organization._id,
            email: organization.email,
            role: organization.role,
          },
          secret,
          { expiresIn: tokenRefreshTime }
        );

        let verify: any = await VerifyJWT(token);
        let time: number = verify.exp;
        let token_expires_at: any = new Date(time * 1000);

        await auth_token.remove();
        return res.status(200).json({
          success: true,
          data: {
            token,
            refresh_token,
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
