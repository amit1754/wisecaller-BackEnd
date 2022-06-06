import { Request, Response, NextFunction } from "express";
import { IOtp, IUser } from "../../interfaces/auth";
import jwt from "jsonwebtoken";
import { MobileNoCheckUtils, jwtVerify, device_register } from "../../utils";
import { getUserBll, getauthTokenBll } from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";
import SNSClient from "@wisecaller/sns";
class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo)
        return res
          .status(400)
          .json({ error: "mobile number is not valid" });
      const payload: IUser = {
        ...req.body,
      };

      const user = await getUserBll.createUser(payload);
      req.body.user = user;
      next();
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo)
        return res
          .status(400)
          .json({ error: "mobile number is not valid" });

      next();
    } catch (error: any) {
      return logError(error, req, res);
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
      await SNSClient.sendOTP(reqData.mobileNo, otp);
      let token;
      const userOtpDe = await getauthTokenBll.getTokenByPhone(reqData.mobileNo);
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

      var resObj = {
        otp: token.otp,
      };
      if (process.env.STAGE == "prod") delete resObj.otp;
      return res.status(200).json(resObj);
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async verifyOtp(req: Request, res: Response) {
    try {
      const { mobileNo, otp, user_device } = req.body;

      let userDetails: any;
      let userFind: any = await getUserBll.findUserByPhone(mobileNo);
      let auth_token: any = await getauthTokenBll.getTokenByPhone(mobileNo);
      if (auth_token) {
        if (auth_token?.otp === otp) {
          if (!userFind) {
            const payload: IUser = {
              phones: {
                no: mobileNo,
                used_for_login: true,
                type: "PRIMARY",
              },
              phone: mobileNo,
              profile_image: null,
            };

            userDetails = await getUserBll.createUser(payload);
          } else {
            let phones: any = userFind.phones;
            for (let i = 0; i < userFind.phones.length; i++) {
              if (userFind.phones[i].no === mobileNo) {
                phones[i].used_for_login = true;
              }
            }

            var updtedValue = { phones: phones };
            userDetails = await getUserBll.findOneAndUpdate(
              userFind._id,
              { ...updtedValue },
              {}
            );
          }
        } else {
          return res
            .status(400)
            .json({ error: "OTP is invalid" });
        }
        if (user_device) {
          await getUserBll.removeUserDevice({ user: userDetails._id });
          await device_register.addDevices(user_device, userDetails._id);
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
        let verify: any = await jwtVerify(token);
        let time: number = verify.exp;
        let token_expires_at: any = new Date(time * 1000);

        await auth_token.remove();
        return res.status(200).json({          
            token,
            refreshToken,
            token_expires_at,
            is_new_user: userFind ? userFind.is_new_user : true,          
        });
      } else {
        return res
          .status(400)
          .json({ error: "OTP is invalid" });
      }
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async resendOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body;
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo);
      if (!checkMobileNo)
        return res
          .status(400)
          .json({error: "mobile number is not valid" });
      let user = await getauthTokenBll.getTokenByPhone(mobileNo);
      next();
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const postData = req.body;

      let token;
      let refreshToken;
      const decodedMainToken: any = jwt.decode(postData.token, {
        complete: true,
      });
      const decodedRefreshToken: any = jwt.decode(postData.refreshToken, {
        complete: true,
      });

      var date = new Date();
      date.setDate(date.getDate() + 5)

      const currentDate = Math.floor(date.getTime() / 1000);

      let secret: any = process.env.JWT_SECRET,
      tokentime = process.env.TOKENTIME;
      let tokenRefreshTime = process.env.REFRESHTOKENTIME;
      token = jwt.sign(
        {
          _id: decodedMainToken?.payload?._id,
          mobileNo: decodedMainToken?.payload.mobileNo,
        },
        secret,
        { expiresIn: tokentime }
      );
      if (currentDate > decodedRefreshToken?.payload?.exp) {
        refreshToken =  jwt.sign(
          { _id: decodedMainToken?.payload?._id,
            mobileNo: decodedMainToken?.payload.mobileNo },
          secret,
          { expiresIn: tokenRefreshTime }
        );
      } 
      let verify: any = await jwtVerify(token);

      let time: number = verify.exp;
      let token_expires_at: any = new Date(time * 1000);
      var payloadData = {
        token: token,
        refreshToken:refreshToken,
        token_expires_at,
      }
      if (refreshToken == null){
        delete payloadData.refreshToken;
      }
      res.status(200).json(payloadData);
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async logout(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
      let tokenData = await getUserBll.findUserDeviceById(loggedInUser._id);
      for (let i = 0; i < tokenData.length; i++) {
        await SNSClient.deRegisterPushNotificationService(
          tokenData[i].user_device?.arn
        );
      }
      await getUserBll.findOneAndRemoveById(loggedInUser._id);
      return res.status(201).json();
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
}

const controller = new AuthController();

export default AuthController;
