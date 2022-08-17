import { Request, Response } from "express";
import { IContactSync } from "../../interfaces/contactSync";
import { UserContact } from "../../models/contactsync";
import { userstatus } from "../../models/user-status_Model";
import { logError } from "@wisecaller/logger";
import { getUserBll } from "@wisecaller/user-service";

import snsClient from "../../utils/snsClient";
import UserBLL from "@wisecaller/user-service/dist/bll/user.bll";
import { error } from "console";

class ContactSyncController {
  async sync(req: Request, res: Response) {
    try {
      const loginUser: any = req.body.user;

      let data: any = req.body;
      let length = data.length;
      for (let i = 0; i < length; i++) {
        let userContactFind = await UserContact.findOne({
          contact: loginUser._id,
          contactId: data[i].contactId,
        });

        if (userContactFind) {
          if (data[i].is_deleted) {
            await UserContact.findByIdAndRemove(userContactFind.id);
          } else {
            delete data[i].contact;
            await UserContact.findOneAndUpdate(
              { _id: userContactFind._id },
              { $set: { ...data[i] } }
            );
          }
        } else {
          data[i].contact = loginUser._id;
          if (
            data[i]?.is_deleted == false ||
            data[i]?.is_deleted == undefined
          ) {
            let userContactPayload = new UserContact(data[i]);
            await userContactPayload.save();
          }
        }
      }
      res.status(201).json();
    } catch (error: any) {
      if (error.code === 11000) {
        return res
          .status(409)
          .json({ error: "contact already exists with contactId" });
        var err = new Error("contact already exists with contactId");
        return logError(err, req, res);
      } else {
        return logError(error, req, res);
      }
    }
  }

  async addContact(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.body.user;
      const contact: any = req.body;
      const findContact = await UserContact.find({
        $and: [
          { first_name: contact.first_name },
          { contact: loggedInUser._id },
        ],
      });
      if (findContact.length >= 1) {
        return res.status(409).json({
          error: "contact is avaliable with same name in youe contact list",
        });
        throw new Error(
          "contact is avaliable with same name in youe contact list"
        );
      } else {
        contact.contact = loggedInUser._id;
        let contactupdate: IContactSync = contact;

        const contactSave = new UserContact(contactupdate);
        await contactSave.save();
        res.status(201).json();
      }
    } catch (error: any) {
      if (error.code === 11000) {
        return res
          .status(409)
          .json({ error: "contact already exists with contactId" });
        var err = new Error("contact already exists with contactId");
        return logError(err, req, res);
      } else {
        return logError(error, req, res);
      }
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      let page: any = req.query.page;
      let limit: any = req.query.limit;

      let loggedInUser: any = req.body.user;
      var user = await getUserBll.getUserDetails(loggedInUser._id);
      // for update on fly
      let contctTime = await UserContact.aggregate([
        { $match: { contact: loggedInUser._id } },
        {
          $lookup: {
            from: "users",
            localField: "phones.ph_no",
            foreignField: "phones.no",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        { $limit: +limit || 20 },
        { $skip: page > 0 ? +limit * (+page - 1) : 0 },
        { $sort: { first_name: 1 } },
      ]);
      res.status(200).json(contctTime);
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async updtateContact(req: Request, res: Response) {
    try {
      let data: any = req.body;
      const loginUser: any = req.body.user;
      let length = data.length;
      for (let i = 0; i < length; i++) {
        if (data[i]?.is_deleted) {
          await UserContact.findOneAndRemove({
            contactId: data[i].contactId,
            contact: loginUser._id,
          });
        } else {
          data[i].contact = loginUser._id;
          let contact: any = data[i];
          const dda = await UserContact.findOneAndUpdate(
            {
              $and: [
                {
                  contact: loginUser._id,
                },
                { contactId: data[i].contactId },
              ],
            },
            contact,
            {
              upsert: true,
              new: true,
            }
          );
        }
      }
      res.status(201).json();
    } catch (err: any) {
      return logError(err, req, res);
    }
  }

  async searchContact(req: Request, res: Response) {
    try {
      let search: String = req.body.phone_number;
      let searchString = search.replace("+", "");
      const loggedInUser: any = req.body.user;
      const userContactFind = await UserContact.aggregate([
        {
          $match: {
            "phones.ph_no": { $regex: searchString, $options: "ig" },
            contact: loggedInUser._id,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "phones.ph_no",
            foreignField: "phones.no",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
      ]);

      res.status(200).json(userContactFind);
    } catch (err: any) {
      if (err.code === 51091) {
        return res
          .status(400)
          .json({ error: "please find with phone number only" });
        var error = new Error("please find with phone number only");
        return logError(error, req, res);
      } else {
        return logError(err, req, res);
      }
    }
  }

  async deleteContact(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.body.user;
      const { id } = req.params;
      const deleteContact = await UserContact.findOneAndRemove({
        _id: id,
        user: loggedInUser._id,
      });
      res.status(201).json();
    } catch (err: any) {
      return logError(err, req, res);
    }
  }

  async addFavorite(req: Request, res: Response) {
    try {
      const loginUser: any = req.body.user;
      const { number, is_favorite }: any = req.body;

      await UserContact.findOneAndUpdate(
        { "phones.ph_no": number, user: loginUser._id },
        { is_favorite }
      );

      res.status(201).json();
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async addBlock(req: Request, res: Response) {
    try {
      const loginUser: any = req.body.user;
      const { number, is_blocked }: any = req.body;

      await UserContact.findOneAndUpdate(
        { "phones.ph_no": number, user: loginUser._id },
        { is_blocked }
      );

      res.status(201).json();
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async callBack(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.body.user;
      let event = {
        type: "CALL_BACK_REQUEST",
        title: `${loggedInUser.first_name} ${loggedInUser.last_name} has requested for a callback.`,
        user: loggedInUser,
        to: req.body.to,
        text: req.body.message,
      };
      await snsClient.publishToSNS(event);
      return res.status(201).json();
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async getDetail(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let saveResponse = await UserContact.find(
        { id },
        { contactId: 1, phones: 1 }
      );
      let status = await userstatus.find(
        {},
        { status: 1, timestamps: 1, paginate: 1 }
      );
      if (saveResponse) {
        res.status(200).json({
          success: true,
          message: "Get Successes",
          data: saveResponse,
          status,
        });
      } else {
        throw new Error();
      }
    } catch (error: any) {
      console.log("error", error);
      return logError(error, req, res);
    }
  }
  async getMobileNo(req: Request, res: Response) {
    try {
      const { ph_no } = req.body;
      if (ph_no) {
        let saveResponse = await UserContact.find({ ph_no: ph_no });
        let statusData = await userstatus.find({}, { status: 1 });
        const payload = {
          dataSave: saveResponse,
          statusData,
        };
        if (saveResponse) {
          res.status(200).json({
            success: true,
            message: "Get Successes",
            data: payload,
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "Phone number is wrong",
        });
      }
    } catch (error: any) {
      console.log("error", error);
      return logError(error, req, res);
    }
  }
}

export default ContactSyncController;
