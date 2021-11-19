import { Request, Response, NextFunction } from "express";
import { IOtp, IUser } from "../../interfaces/auth";
import { User } from "../../models/user";
import { AuthToken } from "../../models/auth-token";
import jwt from "jsonwebtoken";
import { MobileNoCheckUtils } from "../../utils";
import sendSMS1 from "../../middlewares/smsSendMiddelware";
import moment from "moment";

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

      next();
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async generateOtp(req: Request, res: Response) {
    try {
      const otp = Math.floor(1000 + Math.random() * 9000);
      const reqData: any = req.body;

      let payload: IOtp = {
        otp: otp,
        mobileNo: reqData.mobileNo,
      };

      await sendSMS1(reqData.mobileNo, otp);
      let token;
      const userOtpDe = await AuthToken.findOne({
        mobileNo: reqData.mobileNo,
      });
      if (userOtpDe) {
        token = await AuthToken.findOneAndUpdate(
          { mobileNo: reqData.mobileNo },
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
      });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async verifyOtp(req: Request, res: Response) {
    try {
      const { mobileNo, otp } = req.body;

      let userDetails: any;
      let userFind: any = await User.findOne({ "phones.no": mobileNo })

      let auth_token: any = await AuthToken.findOne({ mobileNo: mobileNo });
      if (auth_token) {
        if (auth_token?.otp === otp) {
          if (!userFind) {
            const payload: IUser = {
              phones: {
                no: mobileNo,
                used_for_login: false,
                type: "PRIMARY",
              },
              phone: mobileNo,
              profile_image: null

            };

            const user = new User(payload);
            userDetails = await user.save();
          } else {
            let phones: any = userFind.phones;
            for (let i = 0; i < userFind.phones.length; i++) {
              if (userFind.phones[i].no === mobileNo) {
                phones[i].used_for_login = true;
              }
            }

            userDetails = await User.findOneAndUpdate(
              { _id: userFind._id },
              { phones: phones }
            );
          }
        } else {
          throw new Error("otp is invalid");
        }

        let secret: any = process.env.JWT_SECRET,
          tokenTime: any = process.env.TOKENTIME,
          tokenRefreshTime = process.env.REFRESHTOKENTIME;

        let token = jwt.sign(
          { _id: userDetails.id, mobileNo: userDetails.mobileNo },
          secret,
          { expiresIn: tokenTime }
        );
        const refreshToken = jwt.sign(
          { _id: userDetails.id, mobileNo: userDetails.mobileNo },
          secret,
          { expiresIn: tokenRefreshTime }
        );

     
       
        let token_expires_at: string = moment()
          .add(12, "hours")
          .utc()
          .toISOString();
       

        await auth_token.remove();
        return res.status(200).json({
          success: true,
          data: {
            token,
            refreshToken,
            token_expires_at,
            is_new_user: userFind?.is_new_user || true,
          },
        });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "Otp is invalid" });
      }
    } catch (error: any) {
      return res
          .status(500)
          .json({ success: false, message: error.message })
    }
  }
  async resendOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo) throw new Error("mobile number is not valid");
      let user = await AuthToken.findOne({ mobileNo: mobileNo });
      next();
    } catch (error: any) {
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
