import { Request, Response } from "express";
import { User } from "../../models/user";
import { UserStatus } from "../../models/status";
import { ContactUs } from '../../models/contactUs'
import { sendMailUtils } from '../../utils'
import {deletefile} from '../../middlewares/uploadService'


class UserController {
  async show(req: Request, res: Response) {
    
    try {
      const loggedInUser: any = req.user;



      let user =await User.aggregate([
        {
          $match:{_id: loggedInUser._id}
        },
        {
          $lookup:{
            from: 'usersatus',
            localField: 'status',
            foreignField: '_id',
            as: 'userStatus'
          }
        },
        {
          $lookup:{
            from: 'usersubstatuses',
            localField: 'subStatus',
            foreignField: '_id',
            as: 'userSubStatus'
          }
      },
      
    ])
    
    res.status(200).json({sucess: true,message:"User Profile details get successfully",data:user})
    
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    
    const reqPayload: any = req;
    try {
      const loggedInUser: any = req.user;
      let payload: any;
      if(reqPayload.file){
       payload = {
        ...req.body,
        profileImage: reqPayload.file.key
      };
    }
    else{
       payload = {
        ...req.body,
        
      };
    }
  
      if (loggedInUser.profileImage != null) {
        await deletefile(loggedInUser.profileImage)
      }


      let user = await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      return res.status(200).json({ success: true, data: user });
    } catch (error: any) {
      console.log("error", error)
      return res.status(200).json({ success: false, message: error.message });
    }
  }
  async contactUs(req: Request, res: Response) {
    try {

      const { email, message } = req.body;
      let contactUsMessage: any = process.env.CONTACTUSMESSAGE
      let ContactUsEmail: any = process.env.CONTACTUSEMAIL
      let subject: any = process.env.SUPPORTSUBJECT
      const sendEmail = await sendMailUtils.Send(email, ContactUsEmail, subject, contactUsMessage)
      console.log(`sendEmail`, sendEmail)
      // if (sendEmail.error) {
      //   throw new Error("email sending failed")
      // }

      let saveObj = new ContactUs({
        email,
        Message: message
      })
      const saveResponse = await saveObj.save()
      if (saveResponse) {
        res.status(200).json({ success: true, message: "success", data: [] });
      }
      else {
        res.status(400).json({ success: false, message: "Email is not send", data: [] });

      }


    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  async getcontactUs(req: Request, res: Response) {
    try {
      console.log(req.user)
      const role: any = req?.user
      if (role.role != 'ADMIN') {
        res.status(401).send("Unauthorized")
      }
      else {


        let contactUs: any = await ContactUs.find().sort({ createdAt: -1 })
        res.status(200).json({
          success: true,
          data: contactUs,
          message: "contactUs details get sucess fully"
        });
      }
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }


  async addDevices(req: Request, res: Response){
    const reqPayload: any = req;
    try {
      const loggedInUser: any = req.user;
      let payload:any = {
        devices:req.body.devices
      };


      let user = await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      return res.status(200).json({ success: true,message:"devices added successfully", data: [] });
    } catch (error: any) {
      console.log("error", error)
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}


const controller = new UserController();
export default UserController;
