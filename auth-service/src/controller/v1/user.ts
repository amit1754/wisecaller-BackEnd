import { Request, Response } from "express";
import { ContactUs } from "../../models/contactUs";
import emailClient from "@wisecaller/email";
import { deletefile } from "@wisecaller/s3";
import snsClient from "@wisecaller/sns";
import { getUserBll, getStatusBll } from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";

class UserController {
  async show(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData?.user;
      let user: any = await getUserBll.getUserDetails(loggedInUser._id);
      res.status(200).json({
        success: true,
        message: "User Profile details get successfully",
        data: user,
      }); 
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async update_by_me(req: Request, res: Response) {
    try {
      const payload = {
        ...req.body,
      };
      let requestData: any = req;
      const loggedInUser: any = requestData?.user;
      const user = await getUserBll.findUserById(loggedInUser._id);
      let phones = user.phones;
      if (payload.secondary_no) {
        const secondary_no_user = await getUserBll.getUserByPhoneAndId(
          loggedInUser._id,
          payload.secondary_no
        );
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

      return res.status(200).json({ success: true, data: user });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async update(req: Request, res: Response) {
    const reqPayload: any = req;
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData?.user;
      let payload: any;

      if (reqPayload.body.secondary_no) {
        const findSecondaryNO: any = await getUserBll.getUserByPhoneAndId(
          loggedInUser._id,
          reqPayload.body.secondary_no
        );

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
      let updatedObject = { ...payload, is_new_user: false };
      await getUserBll.findOneAndUpdate(
        loggedInUser._id,
        { ...updatedObject },
        {
          upsert: true,
          new: false,
        }
      );

      return res
        .status(200)
        .json({ success: true, message: "user update successfully", data: [] });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async contactUs(req: Request, res: Response) {
    try {
      const { email, message } = req.body;
      let contactUsMessage: any = process.env.CONTACTUSMESSAGE;
      let subject: any = process.env.SUPPORTSUBJECT;
      const sendEmail = await emailClient.Send(
        email,
        subject,
        contactUsMessage
      );
      let contactMail: any = process.env.CONTACTUSEMAIL;
      await emailClient.Send(contactMail, subject, message);
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
      return logError(error, req, res);
    }
  }
  async getcontactUs(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData?.user;
      if (loggedInUser.role != "ADMIN") {
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
      return logError(error, req, res);
    }
  }

  async addDevices(req: Request, res: Response) {
    const reqPayload: any = req;
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData?.user;
      let payload: any = {
        devices: req.body.devices,
      };

      let user = await getUserBll.findOneAndUpdate(
        loggedInUser._id,
        { ...payload },
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
      return logError(error, req, res);
    }
  }

  async updateUserStatus(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData?.user;
      let user: any = {};
      let payload: any = {
        name: "",
        status: {
          sub_status: {},
        },
      };

      if (!req.body.is_deleted) {
        if (req.body.customStatusId) {
          let userCustomStatus = await getStatusBll.getCustomStatusById(
            req.body.customStatusId
          );

          let userStatus = await getStatusBll.getStatusByFindId(
            userCustomStatus.status
          );
          Object.assign(payload, {
            name: userCustomStatus.custom_name,
            status: { ...payload.status, ...userStatus },
          });
          if (userCustomStatus.substatus) {
            let userSubStatus = await getStatusBll.getSubstatusByFindId(
              userCustomStatus.substatus
            );
            Object.assign(payload, { sub_status: userSubStatus });
          }
        }

        if (req.body.statusId) {
          let userStatus = await getStatusBll.getStatusByFindId(
            req.body.statusId
          );
          Object.assign(payload, {
            status: { ...payload.status, ...userStatus },
          });
        }

        if (req.body.subStatusId) {
          let userSubStatus = await getStatusBll.getSubstatusByFindId(
            req.body.subStatusId
          );
          Object.assign(payload.status, { sub_status: userSubStatus });
        }

        if (req.body.notes) {
          if (req.body.notes.id) {
            let findNotes = await getStatusBll.getNotesById(req.body.notes.id);
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
        user = await getUserBll.findOneAndUpdate(
          loggedInUser._id,
          { user_status: payload },
          { upsert: true, new: true }
        );
      } else {
        let updatedPayload = { user_status: null };
        user = await getUserBll.findOneAndUpdate(
          loggedInUser._id,
          { user_status: null },
          { upsert: true, new: true }
        );
      }
      let snsPayload = {
        type: "STATUS_UPDATE",
        title: "Status Update",
        user_id: loggedInUser._id,
        send_all: true,
      };
      await snsClient.publishToSNS(snsPayload);

      return res.status(200).json({ success: true, data: user });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async searchWisecaller(req: Request, res: Response) {
    try {
      let search = req.body.phone_number;
      let searchString = search.replace("+", "");
      let payload = {
        "phones.no": { $regex: searchString, $options: "ig" },
      };
      const userContactFind = await getUserBll.findUserByPayload({
        ...payload,
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
        return logError(err, req, res);
      }
    }
  }
}

const controller = new UserController();
export default UserController;
