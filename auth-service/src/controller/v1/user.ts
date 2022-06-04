import { Request, Response } from "express";
import { ContactUs } from "../../models/contactUs";
import emailClient from "@wisecaller/email";
import { deletefile } from "@wisecaller/s3";
import snsClient from "@wisecaller/sns";
import { getUserBll, getStatusBll } from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";
import CloudWatchRuleClient from "@wisecaller/cloudwatcheventrule";
import moment from "moment";
import { device_register } from "../../utils";

class UserController {
  async show(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
      let user: any = await getUserBll.getUserDetails(loggedInUser._id);
      res.status(200).json(user);
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
      const loggedInUser: any = requestData.body.user;
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
              .status(409)
              .json({ error: "Phone number already added!" });
          }
        } else {
          return res.status(409).json({error: "Secondary number already exists!"});
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

      return res.status(200).json( user);
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async update(req: Request, res: Response) {
    const reqPayload: any = req;
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
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
            return res.status(409).json({
              error: "Second phone no already exists",
            });
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
      delete payload.user;
      delete payload.token;
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

      return res.status(201).json();
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
        res.status(201).json();
      } else {
        res
          .status(410)
          .json({ error: "Email not send"});
      }
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async getcontactUs(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
      if (loggedInUser.role != "ADMIN") {
        res.status(401).send("Unauthorized");
      } else {
        let contactUs: any = await ContactUs.find().sort({ createdAt: -1 });
        res.status(200).json(contactUs);
      }
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async addDevices(req: Request, res: Response) {
    const reqPayload: any = req;
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
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
      return res.status(201).json();
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async updateUserStatus(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
      var rule: any = requestData.body.rule;
      let user: any = {};
      let payload: any = {
        name: "",
        status: {
          sub_status: {},
        },
      };
      var ruleName = loggedInUser._id ? "_" + loggedInUser._id : "";
      var endTime = req.body.end_date;
      if (!req.body.is_deleted) {
        if (req.body.customStatusId) {
          let userCustomStatus = await getStatusBll.getCustomStatusById(
            req.body.customStatusId
          );
          ruleName += userCustomStatus.id + "_Remove";
          if (!endTime) {
            endTime = userCustomStatus.end_date;
          }
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
          if (userCustomStatus != null) {
            await getStatusBll.updateCustomStatusById(
              userCustomStatus._id,
              { has_processed: false },
              {
                upsert: true,
                new: true,
              }
            );
          }
        }

        if (req.body.statusId) {
          let userStatus = await getStatusBll.getStatusByFindId(
            req.body.statusId
          );
          Object.assign(payload, {
            status: { ...payload.status, ...userStatus },
          });
          ruleName += req.body.statusId + "_Remove";
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
              return res.status(400).json({error: "Notes is not available"});
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
        // create a rule and fire on end time , reset the status to empty.
        // delete the existing rule.
        if (rule) {
          await CloudWatchRuleClient.deleteRule(rule);
        }
        //create the end rule
        if (endTime) {
          var schedulingTime = moment(endTime).utc(true);
          var hour = schedulingTime.format("HH");
          var min = schedulingTime.format("mm");
          var month = schedulingTime.format("MM");
          var day = schedulingTime.format("DD");
          var year = schedulingTime.format("YYYY");

          var exp =
            "cron(" +
            min +
            " " +
            hour +
            " " +
            day +
            " " +
            month +
            " ? " +
            year +
            ")";
          var removePayload = {
            rule: ruleName,
            status_type: req.body.customStatusId ? "CUSTOM" : "GENERAL_STATUS",
            customStatusId: req.body.customStatusId,
            statusId: req.body.statusId,
            subStatusId: req.body.subStatusId,
            is_deleted: true,
            end_date: req.body.end_date,
            user: loggedInUser._id,
          };
          await CloudWatchRuleClient.createCloudWatchEvent(
            ruleName,
            exp,
            removePayload,
            process.env.EVENT_PROCESSOR_TOPIC_ARN
          );
        }
      } else {
        let updatedPayload = { user_status: null };
        user = await getUserBll.findOneAndUpdate(
          loggedInUser._id,
          { user_status: null },
          { upsert: true, new: true }
        );
        //delete the remove rule
        if (rule) {
          await CloudWatchRuleClient.deleteRule(rule);
        }
      }
      let snsPayload = {
        type: "STATUS_UPDATE",
        title: "Status Update",
        user_id: loggedInUser._id,
        send_all: true,
      };
      await snsClient.publishToSNS(snsPayload);

      return res.status(200).json(user);
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

      res.status(200).json(userContactFind);
    } catch (err: any) {
      if (err.code === 51091) {
        res.status(400).json({error: "please find with phone number only"});
      } else {
        return logError(err, req, res);
      }
    }
  }

  async userDevice(req: Request, res: Response) {
    try {
      let { user_device, user } = req.body;
      await getUserBll.removeUserDevice({ user: user._id });
      await device_register.addDevices(user_device, user._id);
      return res
        .status(201).json();
    } catch (error) {
      return logError(error, req, res);
    }
  }
}

export default UserController;
