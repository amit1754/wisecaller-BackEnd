import { Request, Response } from "express";
import { User } from "../../models/user";
import { customStatus } from "../../models/customStatus";
import { ContactUs } from "../../models/contactUs";
import { sendMailUtils } from "../../utils";
import { deletefile } from "../../middlewares/uploadService";

class UserController {
  async show(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;

      let user: any = await User.aggregate([
        {
          $match: { _id: loggedInUser._id },
        },
        {
          $lookup: {
            from: "usersatus",
            localField: "user_status",
            foreignField: "_id",
            as: "userStatus",
          },
        },
        {
          $lookup: {
            from: "usersubstatuses",
            localField: "user_sub_status",
            foreignField: "_id",
            as: "userSubStatus",
          },
        },
      ]);

      const custom_status: any = await customStatus.aggregate([
        {
          $match: {
            user: loggedInUser._id,
          },
        },
        {
          $lookup: {
            from: "usersatus",
            localField: "status",
            foreignField: "_id",
            as: "userStatus",
          },
        },
        {
          $unwind: {
            path: "$userStatus",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "usersubstatuses",
            localField: "substatus`",
            foreignField: "_id",
            as: "userSubStatus",
          },
        },
        {
          $unwind: { path: "$userSubStatus", preserveNullAndEmptyArrays: true },
        },
      ]);
      user[0].customStatus = custom_status;

      res.status(200).json({
        sucess: true,
        message: "User Profile details get successfully",
        data: user[0],
      });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    const reqPayload: any = req;
    try {
      const loggedInUser: any = req.user;
      let payload: any;
      let phones: any;

      let data: any;
      if (reqPayload.body?.phone) {
        data = {
          no: reqPayload.body?.phone,
          used_for_login: false,
        };
        phones = { ...phones, ...data }
      }
      if (reqPayload.body.secondary_no) {
        data = {
          no: reqPayload.body.secondary_no,
          used_for_login: false,
        };
        phones = { ...phones, ...data };
      }

      console.log("phones", phones);




      if (phones) {
        payload = {
          ...payload,
          phones,
        };
      }

      if (reqPayload.file) {
        payload = {
          ...payload,
          ...req.body,
          profile_image: reqPayload.file.key,
        };
      } else {
        payload = {
          ...payload,
          ...req.body,
        };
      }
      console.log(payload);
      if (loggedInUser.profileImage != null) {
        await deletefile(loggedInUser.profileImage);
      }

      let user = await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        payload,
        {
          upsert: true,
          new: false,
        }
      );
      return res.status(200).json({ success: true, data: [] });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  async contactUs(req: Request, res: Response) {
    try {
      const { email, message } = req.body;
      let contactUsMessage: any = process.env.CONTACTUSMESSAGE;
      let ContactUsEmail: any = process.env.CONTACTUSEMAIL;
      let subject: any = process.env.SUPPORTSUBJECT;
      const sendEmail = await sendMailUtils.Send(
        email,
        ContactUsEmail,
        subject,
        contactUsMessage
      );

      // if (sendEmail.error) {
      //   throw new Error("email sending failed")
      // }

      let saveObj = new ContactUs({
        email,
        Message: message,
      });
      const saveResponse = await saveObj.save();
      if (saveResponse) {
        res.status(200).json({ success: true, message: "success", data: [] });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Email is not send", data: [] });
      }
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  async getcontactUs(req: Request, res: Response) {
    try {
      const role: any = req?.user;
      if (role.role != "ADMIN") {
        res.status(401).send("Unauthorized");
      } else {
        let contactUs: any = await ContactUs.find().sort({ createdAt: -1 });
        res.status(200).json({
          success: true,
          data: contactUs,
          message: "contactUs details get sucess fully",
        });
      }
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async addDevices(req: Request, res: Response) {
    const reqPayload: any = req;
    try {
      const loggedInUser: any = req.user;
      let payload: any = {
        devices: req.body.devices,
      };

      let user = await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      return res.status(200).json({
        success: true,
        message: "devices added successfully",
        data: [],
      });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  // async updateCustomStatus(req: Request, res: Response){
  //   try{
  //       const loggedInUser: any = req.user;

  //   } catch (error: any) {

  //     return res.status(500).json({ success: false, message: error.message });
  //   }
  // }
}

const controller = new UserController();
export default UserController;
