import { Request, Response, NextFunction } from "express";
import { IOtp, IUser } from "../../interfaces/auth";
import { User } from "../../models/user";
import { AuthToken } from "../../models/auth-token";
import jwt from "jsonwebtoken";
import { MobileNoCheckUtils } from '../../utils'
import sendSMS1 from "../../middlewares/smsSendMiddelware"


var AWS = require("aws-sdk");

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo)
      if (!checkMobileNo) throw new Error("mobile number is not valid")
      const payload: IUser = {
        ...req.body,
      };


      const user = new User(payload);
      await user.save();
      req.body.user = user;
      next();
    } catch (error:any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { mobileNo } = req.body
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo)
      if (!checkMobileNo) throw new Error("mobile number is not valid")

      let user = await User.findOne({ mobileNo: mobileNo });
      let userCreater;
      if(!user){
        const payload: IUser = {
          ...req.body,
        };
  
        const user = new User(payload);
       userCreater= await user.save();
       req.body.user = userCreater;
      }
      else{ 

        req.body.user = user;
      }
      
      next();
    } catch (error:any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async generateOtp(req: Request, res: Response) {
    try {
      const otp = Math.floor(1000 + Math.random() * 9000);
      const requestedUser = req.body.user;
    
      const user = await User.findOne({ mobileNo: requestedUser._id });
      let payload: IOtp = {
        otp: otp,
        user: user ? user._id : requestedUser._id,
      };

      await sendSMS1(requestedUser?.mobileNo, otp);
      let token;
      const userOtpDe=await AuthToken.findOne({user:user ? user._id : requestedUser._id})
      if(userOtpDe){

        token = await AuthToken.findOneAndUpdate(
          { user: requestedUser._id },
          payload,
          {
            upsert: true,
            new: true,
          }
        );       
      }
      else{ 
         token = new AuthToken(payload);
        await token.save();
      }


      
      return res.status(200).json({ success: true,message:"message send successful", otp:token.otp});
    } catch (error:any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async verifyOtp(req: Request, res: Response) {
    try {
      const { mobileNo, otp } = req.body
      let user = await User.findOne({ mobileNo });
      console.log("user",user)

      let auth_token: any = await AuthToken.findOne({ user: user?._id });
      if (auth_token) {
        if (auth_token?.otp != otp) {
          throw new Error("otp is invalid")
        }
        let secret:any = process.env.JWT_SECRET
        let token = jwt.sign(
          { _id: user.id, mobileNo: user.mobileNo },
          secret,
          { expiresIn: "10m" }
        );
        const refreshToken = jwt.sign(
          { _id: user.id, mobileNo: user.mobileNo },
          secret,
          { expiresIn: "30m" }
        );
        await auth_token.remove();
        return res.status(200).json({ success: true, data: { token,refreshToken } });
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
  async resendOtp(req: Request, res: Response,next: NextFunction){
    try{
      const { mobileNo } = req.body
      const checkMobileNo = await MobileNoCheckUtils.verify(mobileNo)
      if (!checkMobileNo) throw new Error("mobile number is not valid")
      let user = await User.findOne({ mobileNo: mobileNo });
      if(user){
        req.body.user = user;
        next();
      }
      else{ 
        throw new Error("user is not found")
      }


    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }


  async refreshToken(req: Request, res: Response){
    try{
      const postData = req.body
      let token,refreshToken;
      const decodedMainToken:any = jwt.decode(postData.token, {
        complete: true
       });
       const decodedRefreshToken:any = jwt.decode(postData.token, {
        complete: true
       });
       const currentDate = Math.floor(Date.now() / 1000);

		if (currentDate > decodedMainToken?.payload.exp) {
      let secret:any = process.env.JWT_SECRET
     
      if(currentDate>decodedRefreshToken?.payload?.exp){

         token = jwt.sign(
          { _id: decodedMainToken?.payload?._id, mobileNo: decodedMainToken?.payload.mobileNo },
          secret,
          { expiresIn: "10m" }
        );
         refreshToken = jwt.sign(
          { _id: decodedMainToken?.payload?._id, mobileNo: decodedMainToken?.payload.mobileNo },
          secret,
          { expiresIn: "20m" }
        );
      }
      else{
        token =postData.refreshToken;
        refreshToken =jwt.sign(
          { _id: decodedMainToken?.payload?._id, mobileNo: decodedMainToken?.payload.mobileNo },
          secret,
          { expiresIn: "20m" })  
      }
		}
    else{
      token=postData.token;
      refreshToken =postData.refreshToken;
    }
    
      // if refresh token exists
      res.status(200).json({token,refreshToken});
    
      
    } catch (error: any) {
      
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}
  


const controller = new AuthController();

export default AuthController;
