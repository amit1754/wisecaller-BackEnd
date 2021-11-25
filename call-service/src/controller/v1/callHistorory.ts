import { Request, Response } from "express";
import { map } from "lodash";
import { UserContact } from "../../models/contactsync ";
import { User } from "../../models/user";
import { CallHistory } from "../../models/callHistory";

class callHistory {
  async add(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      let { body }: any = req;
      for (let index = 0; index < body.length; index++) {
        body[index].user = loginUser._id;
        const getContact = await UserContact.findOne({
          "phones.ph_no": body[index].phone,
        });
        if (getContact) {
          body[index].contactId = getContact._id;
        }
      }

      await CallHistory.insertMany(body);

      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async callDetails(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;

      const contactDetails = await CallHistory.aggregate([
        { $match: { user: loginUser._id } },
        {
          $lookup: {
            from: "user_contacts",
            localField: "contactId",
            foreignField: "_id",
            as: "contact",
          },
        },
        {
          $unwind: {
            path: "$contact",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
            list: { $push: "$$ROOT" },
          },
        },
        { $sort: { _id: -1 } },
        {
          $project: {
            date: "$_id",
            _id: 0,
            "list._id": 1,
            "list.phone": 1,
            "list.name": 1,
            "list.callHistory": 1,
            "list.date": 1,
            "list.createdAt": 1,
            "list.updatedAt": 1,
            "list.number": 1,
            "list.status.notes": 1,
            "list.userDetails": 1,
            "list.contact_details": 1,
          },
        },
      ]);

      res
        .status(200)
        .json({ success: true, message: "Sucess", data: contactDetails });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async addFavorite(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const { number }: any = req.body;
      const userFind = await UserContact.findOne({ user: loginUser._id });
      const { contact } = userFind;
      const updateContact = map(contact, function (x) {
        if (x.number === number) {
          x.isFavorite = true;
        } else {
          x.isFavorite = false;
        }
        return x;
      });

      await UserContact.updateOne(
        { user: loginUser._id },
        { contact: updateContact }
      );
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async addBlock(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const { number }: any = req.body;
      const userFind = await UserContact.findOne({ user: loginUser._id });
      const { contact } = userFind;
      const updateContact = map(contact, function (x) {
        if (x.number === number) {
          x.isBlock = true;
        } else {
          x.isBlock = false;
        }
        return x;
      });

      await UserContact.updateOne(
        { user: loginUser._id },
        { contact: updateContact }
      );
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async addNumber(req: Request, res: Response) {
    try {
      let reqestData: any = req.body;
      const loginUser: any = req.user;
      let callerHistory: any = await CallHistory.findOne({
        number: reqestData.callerId,
      });
      if (callerHistory) {
        let callerUpdate = {
          time: reqestData.time,
          type: reqestData.type,
          simId: reqestData.simId,
        };
        callerHistory.callHistory.push(callerUpdate);
        let user = await CallHistory.findOneAndUpdate(
          { _id: callerHistory._id },
          callerHistory,
          {
            upsert: true,
            new: true,
          }
        );
        return res.status(200).json({ success: true, data: user });
      } else {
        reqestData.callHistory = {
          time: reqestData.time,
          type: reqestData.type,
          simId: reqestData.simId,
        };

        let data = await User.findOne({ mobileNo: reqestData.callerId });
        if (data) {
          reqestData.number = reqestData.callerId;
          reqestData.callerId = data._id;
        } else {
          reqestData.number = reqestData.callerId;
          reqestData.callerId = null;
        }

        reqestData.wisecallerId = loginUser._id;

        const callHistorySave = new CallHistory(reqestData);
        await callHistorySave.save();
      }

      res
        .status(200)
        .json({ success: true, message: "success", callLogs: reqestData });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async deleteNumber(req: Request, res: Response) {
    try {
      const requestData = req.body;
      const loginUser: any = req.user;
      const { callDetails } = requestData;

      const contactDetailsGet = await CallHistory.findOne({
        callLogs: { $elemMatch: { _id: requestData.callLogId } },
      });

      const a = map(contactDetailsGet.callLogs, function (o: any) {
        if (o._id == requestData.callLogId) {
          o.callList.pop();
        }
        return o;
      });
      await CallHistory.findOneAndUpdate(
        { user: loginUser._id },
        { callLogs: a },
        { upsert: true, new: true }
      );

      res.status(200).json({ success: true, message: "success", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default callHistory;
