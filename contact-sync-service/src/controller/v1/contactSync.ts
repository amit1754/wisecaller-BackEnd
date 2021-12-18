import { Request, Response } from "express";
import { IContactSync } from "../../interfaces/contactSync";
import { UserContact } from "../../models/contactsync";
import { User } from "../../models/user";
import { Types } from "mongoose";
import snsClient from "../../utils/snsClient";

class ContactSyncController {
  async sync(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;

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
            // if (data[i]?.phones) {
            //   let contact: any = data[i]?.phones;
            //   for (let j = 0; j < contact.length; j++) {
            //     const userContactGet = await User.findOne({
            //       "phones.no": contact[j].ph_no,
            //     });

            //     if (userContactGet) data[i].user = userContactGet._id;
            //   }
            // }
            delete data[i].contact;
            await UserContact.findOneAndUpdate(
              { _id: userContactFind._id },
              { $set: { ...data[i] } }
            );
          }
        } else {
          // if (data[i]?.phones) {
          //   let contact: any = data[i]?.phones;
          //   for (let j = 0; j < contact.length; j++) {
          //     const userContactGet = await User.findOne({
          //       "phones.no": contact[j].ph_no,
          //     });

          //     if (userContactGet) data[i].user = userContactGet._id;
          //   }
          // }
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
      res.status(200).json({
        success: true,
        message: "contact update successfully",
        data: [],
      });
    } catch (error: any) {
      if (error.code === 11000) {
        res.status(400).json({
          success: false,
          message: "conatct already exists with contactId",
        });
      } else {
        res.status(500).json({ success: false, message: error.message });
      }
    }
  }

  async addContact(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      const contact: any = req.body;
      const findContact = await UserContact.find({
        $and: [
          { first_name: contact.first_name },
          { contact: loggedInUser._id },
        ],
      });
      if (findContact.length >= 1) {
        throw new Error(
          "contact is avaliable with same name in youe contact list"
        );
      } else {
        contact.contact = loggedInUser._id;
        let contactupdate: IContactSync = contact;

        const contactSave = new UserContact(contactupdate);
        await contactSave.save();
        res.status(200).json({
          success: true,
          message: "contact added successfully",
          data: [],
        });
      }
    } catch (error: any) {
      if (error.code === 11000) {
        res.status(400).json({
          success: false,
          message: "conatct already exists with contactId",
        });
      } else {
        res.status(500).json({ success: false, message: error.message });
      }
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      let page: any = req.query.page;
      let limit: any = req.query.limit;

      let loggedInUser: any = req.user;

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
      res.status(200).json({
        success: true,
        message: "contact list get successfully",
        data: contctTime,
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async updtateContact(req: Request, res: Response) {
    try {
      let data: any = req.body;
      const loginUser: any = req.user;
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

          // if (contact?.phone) {
          //   for (let j = 0; j < contact?.phones?.length; j++) {
          //     const userContactFind = await User.findOne({
          //       "phones.no": contact.phones[j].ph_no,
          //     });
          //     // if (userContactFind) data[i].user = userContactFind._id;
          //   }
          // }
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
      res.status(200).json({
        success: true,
        messgae: "contact update successful",
        data: [],
      });
    } catch (err: any) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

  async searchContact(req: Request, res: Response) {
    try {
      let search: String = req.body.phone_number;
      let searchString = search.replace("+", "");
      const loggedInUser: any = req.user;
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

  async deleteContact(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      const { id } = req.params;
      const deleteContact = await UserContact.findOneAndRemove({
        _id: id,
        user: loggedInUser._id,
      });
      res.status(200).json({
        success: true,
        message: "contact delete successfully",
        data: [],
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }

  async addFavorite(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const { number, is_favorite }: any = req.body;

      await UserContact.findOneAndUpdate(
        { "phones.ph_no": number, user: loginUser._id },
        { is_favorite }
      );

      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async addBlock(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const { number, is_blocked }: any = req.body;

      await UserContact.findOneAndUpdate(
        { "phones.ph_no": number, user: loginUser._id },
        { is_blocked }
      );

      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async callBack(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.user;
      let event = {
        type: "CALL_BACK_REQUEST",
        title: `${loggedInUser.first_name} ${loggedInUser.last_name} has requested for a callback.`,
        user: loggedInUser,
        to: req.body.to,
        text: req.body.message,
      };
      await snsClient.publishToSNS(event);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default ContactSyncController;
