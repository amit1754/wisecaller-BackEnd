import { Request, Response, NextFunction } from "express";
import { IOtp, IUser } from "../../interfaces/auth";
import { User } from "../../models/user";
import { AuthToken } from "../../models/auth-token";
import jwt from "jsonwebtoken";
import { MobileNoCheckUtils } from "../../utils";
import sendSMS1 from "../../middlewares/smsSendMiddelware";

var AWS = require("aws-sdk");

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo) throw new Error("mobile number is not valid");
      const payload: IUser = {
        ...req.body,
      };

      const user = new User(payload);
      await user.save();
      req.body.user = user;
      next();
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo) throw new Error("mobile number is not valid");

      let user = await User.findOne({ mobileNo: mobileNo });
      let userCreater;
      if (!user) {
        const payload: IUser = {
          ...req.body,
        };

        const user = new User(payload);
        userCreater = await user.save();
        req.body.user = userCreater;
        req.body.is_new_user = true;
      } else {
        req.body.user = user;
        req.body.is_new_user = false;
      }

      next();
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async generateOtp(req: Request, res: Response) {
    try {
      const otp = Math.floor(1000 + Math.random() * 9000);
      const requestedUser = req.body.user;
      const reqData: any = req;

      const user = await User.findOne({ mobileNo: requestedUser._id });
      let payload: IOtp = {
        otp: otp,
        user: user ? user._id : requestedUser._id,
      };

      await sendSMS1(requestedUser?.mobileNo, otp);
      let token;
      const userOtpDe = await AuthToken.findOne({
        user: user ? user._id : requestedUser._id,
      });
      if (userOtpDe) {
        token = await AuthToken.findOneAndUpdate(
          { user: requestedUser._id },
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

      return res.status(200).json({
        success: true,
        message: "message send successful",
        otp: token.otp,
        is_new_user: reqData.body?.is_new_user === true ? true : false,
      });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async verifyOtp(req: Request, res: Response) {
    try {
      const { mobileNo, otp } = req.body;
      let user = await User.findOne({ mobileNo });

      let auth_token: any = await AuthToken.findOne({ user: user?._id });
      if (auth_token) {
        if (auth_token?.otp != otp) {
          throw new Error("otp is invalid");
        }
        let secret: any = process.env.JWT_SECRET,
          tokenTime: any = process.env.TOKENTIME,
          tokenRefreshTime = process.env.REFRESHTOKENTIME;

        let token = jwt.sign(
          { _id: user.id, mobileNo: user.mobileNo },
          secret,
          { expiresIn: tokenTime }
        );
        const refreshToken = jwt.sign(
          { _id: user.id, mobileNo: user.mobileNo },
          secret,
          { expiresIn: tokenRefreshTime }
        );

        let hrs: any = tokenTime.substr(0, tokenTime.length - 1);
        let now: any = new Date();
        let token_expires_at: any = now.setHours(
          now.getHours() + parseInt(hrs)
        );

        await auth_token.remove();
        return res.status(200).json({
          success: true,
          data: { token, refreshToken, token_expires_at },
        });
      } else {
        return res
          .status(500)
          .json({ success: false, message: "Otp is invalid" });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  async resendOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo) throw new Error("mobile number is not valid");
      let user = await User.findOne({ mobileNo: mobileNo });
      if (user) {
        req.body.user = user;
        next();
      } else {
        throw new Error("user is not found");
      }
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const postData = req.body;
      let token;
      const decodedMainToken: any = jwt.decode(postData.token, {
        complete: true,
      });
      const decodedRefreshToken: any = jwt.decode(postData.token, {
        complete: true,
      });
      const currentDate = Math.floor(Date.now() / 1000);

      if (currentDate > decodedMainToken?.payload.exp) {
        let secret: any = process.env.JWT_SECRET,
          tokentime = process.env.TOKENTIME;

        if (currentDate > decodedRefreshToken?.payload?.exp) {
          token = jwt.sign(
            {
              _id: decodedMainToken?.payload?._id,
              mobileNo: decodedMainToken?.payload.mobileNo,
            },
            secret,
            { expiresIn: tokentime }
          );
        } else {
          token = postData.refreshToken;
        }
      } else {
        token = postData.token;
      }
      res.status(200).json({
        success: true,
        message: "token refresh sucessfully",
        token: token,
      });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

const controller = new AuthController();

export default AuthController;
