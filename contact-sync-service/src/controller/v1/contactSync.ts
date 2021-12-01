import { Request, Response } from "express";
import { IContactSync } from "../../interfaces/contactSync";
import { UserContact } from "../../models/contactsync";
import { User } from "../../models/user";
import { Types } from "mongoose";

class ContactSyncController {
  async sync(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      let data: any = req.body;
      let length = data.length;
      for (let i = 0; i < length; i++) {
        data[i].user = loginUser._id;
        let contact: any = data[i];
        for (let j = 0; j < contact.phones.length; j++) {
          const userContactFind = await User.findOne({
            "phones.no": contact.phones[j].ph_no,
          });

          if (userContactFind) data[i].user = userContactFind._id;
        }
        const contactSave = new UserContact(contact);
        await contactSave.save();
      }
      res.status(200).json({
        success: true,
        message: "contact sync successfully",
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

      const loggedInUser: any = req.user;
      console.log(loggedInUser._id);
      let userContactFind = await UserContact.find({
        user: Types.ObjectId(loggedInUser._id),
      })
        .skip(page > 0 ? +limit * (+page - 1) : 0)
        .limit(+limit || 20)
        .sort({ first_name: 1 })
        .populate({
          path: "user",
          populate: [
            {
              path: "status",
            },
            {
              path: "subStatus",
            },
          ],
        });

      res.status(200).json({
        success: true,
        message: "contact list get successfully",
        data: userContactFind,
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
        console.log(
          data[i].is_deleted === false || data[i]?.is_deleted == undefined
        );
        if (data[i].is_deleted === false || data[i]?.is_deleted == undefined) {
          data[i].user = loginUser._id;
          console.log("sabdkskn");
          let contact: any = data[i];
          for (let j = 0; j < contact.phones.length; j++) {
            const userContactFind = await User.findOne({
              "phones.no": contact.phones[j].ph_no,
            });
            if (userContactFind) data[i].user = userContactFind._id;
            else contact.phones[j].wisecallerId = null;
          }
          console.log("contact", contact);

          const dda = await UserContact.findOneAndUpdate(
            {
              contactId: contact.contactId,
              user: loginUser._id,
            },
            contact,
            {
              upsert: true,
              new: true,
            }
          );
          console.log("dda", dda);
        } else {
          await UserContact.findOneAndRemove({
            contactId: data[i].contactId,
            user: loginUser._id,
          });
        }
      }
      res.status(200).json({
        success: true,
        messgae: "contact update successful",
        data: [],
      });
    } catch (err: any) {
      console.log("err :>> ", err);
      res.status(500).json({ success: false, message: err.message });
    }
  }

  async searchContact(req: Request, res: Response) {
    try {
      let search: String = req.body.phone_number;
      let searchString = search.replace("+", "");
      const loggedInUser: any = req.user;
      const userContactFind = await UserContact.find({
        "phones.ph_no": { $regex: searchString, $options: "ig" },
        user: loggedInUser._id,
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
}

export default ContactSyncController;
