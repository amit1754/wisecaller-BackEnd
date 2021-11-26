import { Request, Response } from "express";

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
        { $sort: { _id: 1 } },
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
            "list.contact": 1,
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

  async addNumber(req: Request, res: Response) {
    try {
      let reqestData: any = req.body;
      const loginUser: any = req.user;
      console.log(reqestData.phone, loginUser._id);
      let callerHistory: any = await CallHistory.findOne({
        phone: reqestData.phone,
        user: loginUser._id,
      });

      if (callerHistory) {
        let callerUpdate = {
          time: reqestData.date_time,
          type: reqestData.type,
          simId: reqestData.simId,
        };
        callerHistory.callHistory.push(callerUpdate);
        await CallHistory.findOneAndUpdate(
          { _id: callerHistory._id },
          callerHistory,
          {
            upsert: true,
            new: true,
          }
        );
      } else {
        reqestData.callHistory = {
          time: reqestData.date_time,
          type: reqestData.type,
          simId: reqestData.simId,
        };

        // let data = await User.findOne({ mobileNo: reqestData.callerId });
        // if (data) {
        //   reqestData.number = reqestData.callerId;
        //   reqestData.callerId = data._id;
        // } else {
        //   reqestData.number = reqestData.callerId;
        //   reqestData.callerId = null;
        // }
        reqestData.date = reqestData.date_time;

        reqestData.user = loginUser._id;

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
      const requestData: any = req;
      const loginUser: any = req.user;
      const id = requestData.params.id;

      await CallHistory.findOneAndRemove({
        _id: id,
        user: loginUser._id,
      });

      res.status(200).json({ success: true, message: "success", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default callHistory;
