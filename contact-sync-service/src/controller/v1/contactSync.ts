import { Request, Response } from "express";
import { IContactSync } from "../../interfaces/contactSync";
import { UserContact } from "../../models/contactsync";
import { User } from "../../models/user";


class ContactSyncController {
  async sync(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const userFind = await UserContact.findOne({
        user: loginUser._id,
      });

      if (userFind) {
        throw new Error("user contact already avaliable");
      } else {
        let data: any = req.body;
        let length = data.length;
        for (let i = 0; i < length; i++) {
          data[i].user = loginUser._id;
          let contact: any = data[i];
          for (let j = 0; j < contact.phones.length; j++) {
            const userContactFind = await User.findOne({
              mobileNo: contact.phones[j].ph_no,
            });
            if (userContactFind)
              contact.phones[j].wisecallerId = userContactFind._id;
            else contact.phones[j].wisecallerId = null;
          }
          console.log("userContactFind", contact);

          const contactSave = new UserContact(contact);
          await contactSave.save();
        }
      }
      res.status(200).json({
        success: true,
        message: "contact sync successfully",
        data: [],
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async addContact(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      const contact: any = req.body;
      const findContact = await UserContact.find({
        $and: [{ first_name: contact.first_name }, { user: loggedInUser._id }],
      });
      if (findContact.length >= 1) {
        throw new Error(
          "contact is avaliable with same name in youe contact list"
        );
      } else {
        contact.user = loggedInUser._id;
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
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      const userContactFind = await UserContact.aggregate([
        {
          $match: { user: loggedInUser._id },
        },
        {
          $lookup: {
            from: "users",
            localField: "phones.wisecallerId",
            foreignField: "_id",
            as: "wisecallerUser",
          },
        },
        {
          $lookup: {
            from: "usersatus",
            localField: "wisecallerUser.status",
            foreignField: "_id",
            as: "userStatus",
          },
        },
        {
          $lookup: {
            from: "usersubstatuses",
            localField: "wisecallerUser.subStatus",
            foreignField: "_id",
            as: "userSubStatus",
          },
        },
        { $sort: { first_name: 1 } },
      ]);

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
        data[i].user = loginUser._id;
        let contact: any = data[i];
        for (let j = 0; j < contact.phones.length; j++) {
          const userContactFind = await User.findOne({
            mobileNo: contact.phones[j].ph_no,
          });
          if (userContactFind)
            contact.phones[j].wisecallerId = userContactFind._id;
          else contact.phones[j].wisecallerId = null;
        }
        let customId = contact.customId;
        delete contact.customId;

        await UserContact.findOneAndUpdate(
          {
            customId: customId,
          },
          contact,
          {
            upsert: true,
            new: true,
          }
        );
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
      let search = req.body.phone_number;
      const loggedInUser: any = req.user;
      const userContactFind = await UserContact.aggregate([
        {
          $match: {
            $and: [
              { "phones.ph_no": { $regex: search, $options: "ig" } },
              { user: loggedInUser._id },
            ],
          },
        },

        {
          $lookup: {
            from: "users",
            localField: "phones.wisecallerId",
            foreignField: "_id",
            as: "wisecallerUser",
          },
        },
        {
          $lookup: {
            from: "usersatus",
            localField: "wisecallerUser.status",
            foreignField: "_id",
            as: "userStatus",
          },
        },
        {
          $lookup: {
            from: "usersubstatuses",
            localField: "wisecallerUser.subStatus",
            foreignField: "_id",
            as: "userSubStatus",
          },
        },
        { $sort: { first_name: 1 } },
      ]);
      res.status(200).json({
        success: true,
        message: "data get successful",
        data: userContactFind,
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
  async searchWisecaller(req: Request, res: Response) {
    try {
      let search = req.body.phone_number;
      const loggedInUser: any = req.user;
      const userContactFind = await User.aggregate([
        {
          $match: {
            mobileNo: { $regex: search, $options: "ig" },
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
          $lookup: {
            from: "usersubstatuses",
            localField: "subStatus",
            foreignField: "_id",
            as: "userSubStatus",
          },
        },
      ]);
      res.status(200).json({
        success: true,
        message: "data get successful",
        data: userContactFind,
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
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
}

export default ContactSyncController;
