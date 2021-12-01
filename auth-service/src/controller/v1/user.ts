import { Request, Response } from "express";
import { User } from "../../models/user";
import { customStatus } from "../../models/customStatus";
import { ContactUs } from "../../models/contactUs";
import { sendMailUtils } from "../../utils";
import { deletefile } from "../../middlewares/uploadService";
import { UserStatus } from "../../models/status";
import { UserSubStatus } from "../../models/subStatus";
import { Notes } from "../../models/notes";
import { globalTypeModel } from "../../models/globalType.Model";

class UserController {
  async show(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      let user: any = await User.findOne({ _id: loggedInUser._id });
      if (user?.user_status?.status?.applicable_types) {
        user.user_status.status.applicable_types = await globalTypeModel.find({
          _id: { $in: user?.user_status?.status?.applicable_types },
        });
      }

      if (user?.modes?.roadSafetyStatus?.data?.status?.applicable_types) {
        user.modes.roadSafetyStatus.data.status.applicable_types =
          await globalTypeModel.find({
            _id: {
              $in: user?.modes?.roadSafetyStatus?.data?.status
                ?.applicable_types,
            },
          });
      }

      if (user?.user_status?.status?.status_notes?.id) {
        let notesData = await Notes.findById(
          user?.user_status?.status?.status_notes?.id
        );
        if (notesData) {
          user.user_status.status.status_notes.notes = notesData;
        }
      }

      res.status(200).json({
        success: true,
        message: "User Profile details get successfully",
        data: user,
      });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async update_by_me(req: Request, res: Response) {
    try {
      const payload = {
        ...req.body,
      };
      const loggedInUser: any = req.user;
      const user = await User.findOne({ _id: loggedInUser._id });
      let phones = user.phones;
      if (payload.secondary_no) {
        const secondary_no_user = await User.findOne({
          _id: { $ne: loggedInUser._id },
          "phones.no": payload.secondary_no,
        });
        if (!secondary_no_user) {
          let is_exists = phones.find(
            (item: any) => item.no === payload.secondary_no
          );
          if (!is_exists) {
            let phone_payload = {
              no: payload.secondary_no,
              type: "SECONDARY",
              used_for_login: false,
            };
            phones.push(phone_payload);
          } else {
            return res
              .status(200)
              .json({ success: false, message: "Phone no is already added!" });
          }
        } else {
          return res.status(200).json({
            success: false,
            message: "Secondary number already exists!",
          });
        }
      } else {
        if (payload.secondary_no === "") {
          let index = phones.findIndex(
            (item: any) => item.type === "SECONDARY"
          );
          phones.splice(index, 1);
        }
      }
      Object.assign(payload, { phones: phones });

      console.log(payload);
      return res.status(200).json({ success: true, data: user });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    const reqPayload: any = req;
    try {
      const loggedInUser: any = req.user;
      let payload: any;

      if (reqPayload.body.secondary_no) {
        const findSecondaryNO: any = await User.findOne({
          "phones.no": reqPayload.body.secondary_no,
          _id: { $ne: loggedInUser._id },
        });

        if (loggedInUser)
          payload = {
            ...payload,
            phones: loggedInUser.phones,
          };
        if (findSecondaryNO) {
          if (findSecondaryNO.phone === loggedInUser.phone) {
            let updatePhone = {
              no: reqPayload.body.secondary_no,
              type: "SECONDARY",
              used_for_login: false,
            };
            payload.phones.length === 2 ? payload.phones.pop() : "";
            payload.phones.push(updatePhone);
          } else {
            throw new Error("second phoneno already exist!");
          }
        } else {
          let phonesLength = loggedInUser.phones.length;
          if (phonesLength <= 2) {
            let updatePhone = {
              no: reqPayload.body.secondary_no,
              type: "SECONDARY",
              used_for_login: false,
            };
            payload.phones.length === 2 ? payload.phones.pop() : "";
            payload.phones.push(updatePhone);
          }
        }
      } else {
        if (loggedInUser.phones.length === 2) {
          loggedInUser.phones.pop();
        }
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

      if (loggedInUser.profileImage != null) {
        await deletefile(loggedInUser.profileImage);
      }
      delete payload.phone;
      delete payload.role;
      payload.phones = loggedInUser.phones;

      await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        { ...payload, is_new_user: false },
        {
          upsert: true,
          new: false,
        }
      );

      return res
        .status(200)
        .json({ success: true, message: "user update successfully", data: [] });
    } catch (error: any) {
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

  async updateUserStatus(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.user;
      let payload = {
        name: "",
        status: {
          sub_status: {},
        },
      };
      if (req.body.customStatusId) {
        let userCustomStatus = await customStatus.findById(
          req.body.customStatusId
        );
        let userStatus = await UserStatus.findById(
          userCustomStatus.status
        ).lean();
        Object.assign(payload, {
          name: userCustomStatus.custom_name,
          status: { ...payload.status, ...userStatus },
        });
        if (userCustomStatus.substatus) {
          let userSubStatus = await UserSubStatus.findById(
            req.body.subStatusId
          );
          Object.assign(payload, { sub_status: userSubStatus });
        }
      }

      if (req.body.statusId) {
        let userStatus = await UserStatus.findById(req.body.statusId).lean();
        Object.assign(payload, {
          status: { ...payload.status, ...userStatus },
        });
      }

      if (req.body.subStatusId) {
        let userSubStatus = await UserSubStatus.findById(req.body.subStatusId);
        Object.assign(payload.status, { sub_status: userSubStatus });
      }

      if (req.body.notes) {
        if (req.body.notes.id) {
          let findNotes = await Notes.findById(req.body.notes.id);
          if (findNotes) {
            let notes = {
              id: findNotes._id,
              is_custom: false,
              text: "",
            };
            Object.assign(payload.status, { status_notes: notes });
          } else {
            throw new Error("notes is not avalible");
          }
        } else {
          let notes = {
            id: "",
            is_custom: true,
            text: req.body.notes.text,
          };
          Object.assign(payload.status, { status_notes: notes });
        }
      }

      let user = await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        { user_status: payload },
        { upsert: true, new: true }
      );
      return res.status(200).json({ success: true, data: user });
    } catch (error: any) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
  // async updateCustomStatus(req: Request, res: Response){
  //   try{
  //       const loggedInUser: any = req.user;

  //   } catch (error: any) {

  //     return res.status(500).json({ success: false, message: error.message });
  //   }
  // }
  async searchWisecaller(req: Request, res: Response) {
    try {
      let search = req.body.phone_number;
      let searchString = search.replace("+", "");
      const userContactFind = await User.find({
        "phones.no": { $regex: searchString, $options: "ig" },
      });

      res.status(200).json({
        success: true,
        message: "data get successful",
        data: userContactFind,
      });
    } catch (err: any) {
      if (err.code === 51091) {
        res.status(400).json({
          success: false,
          message: "please find with phone number only",
        });
      } else {
        res.status(500).json({ success: false, message: err.message });
      }
    }
  }
}

const controller = new UserController();
export default UserController;
