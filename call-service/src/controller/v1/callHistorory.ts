import { Request, Response } from "express";
import { CallHistory } from "../../models/callHistory";
import { logError } from "@wisecaller/logger";
class callHistory {
  async add(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      let { body }: any = req;

      for (let index = 0; index < body.length; index++) {
        if (body[index].is_deleted === false) {
          body[index].user = loginUser._id;
          let a = await CallHistory.findOneAndUpdate(
            {
              caller_history_id: body[index].caller_history_id,
              user: loginUser._id,
            },
            body[index],
            {
              upsert: true,
              new: true,
            }
          );
        } else {
          await CallHistory.findOneAndRemove({
            caller_history_id: body[index].caller_history_id,
            user: loginUser._id,
          });
        }
      }
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      logError(error, req, res);
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
        // {
        //   $project: {
        //     date: "$_id",
        //     _id: 0,
        //     "list._id": 1,
        //     "list.phone": 1,
        //     "list.name": 1,
        //     "list.callHistory": 1,
        //     "list.is_deleted": 1,
        //     "list.caller_history_id": 1,
        //     "list.date": 1,
        //     "list.createdAt": 1,
        //     "list.updatedAt": 1,
        //     "list.number": 1,
        //     "list.status.notes": 1,
        //     "list.userDetails": 1,
        //     "list.contact": 1,
        //   },
        // },
      ]);

      res
        .status(200)
        .json({ success: true, message: "Sucess", data: contactDetails });
    } catch (error: any) {
      logError(error, req, res);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async addNumber(req: Request, res: Response) {
    try {
      let reqestData: any = req.body;
      const loginUser: any = req.user;

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
      logError(error, req, res);
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
      logError(error, req, res);
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async syncHistory(req: Request, res: Response) {
    try {
      let body: any = [...req.body];
      let loggedInUser: any = req.user;

      for (const item of body) {
        let is_existing = await CallHistory.findOne({
          call_history_id: item.call_history_id,
          loggedin_user: loggedInUser,
        });

        let payload = {
          ...item,
          loggedin_user: loggedInUser._id,
        };

        if (!payload.is_deleted) {
          if (!is_existing) {
            let history = new CallHistory(payload);
            await history.save();
          } else {
            await CallHistory.findOneAndUpdate(
              { _id: is_existing._id },
              payload
            );
          }
        } else {
          await CallHistory.findOneAndRemove({
            call_history_id: item.call_history_id,
            loggedin_user: loggedInUser._id,
          });
        }
      }

      return res.status(200).json({
        success: true,
        message: "Contact history synced successfully",
      });
    } catch (error: any) {
      logError(error, req, res);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async getHistory(req: Request, res: Response) {
    try {
      let page: any = req.query.page;
      let limit: any = req.query.limit;
      let timestamp: any = req.query.timestamp,
        where;
      if (timestamp) {
        where = {
          time: { $gte: new Date(timestamp).toISOString() },
        };
      }
      let loggedInUser: any = req.user;
      // for update on fly
      const callHistory = await CallHistory.aggregate([
        { $match: { loggedin_user: loggedInUser._id, ...where } },
        {
          $lookup: {
            from: "users",
            localField: "phone",
            foreignField: "phones.no",
            as: "users",
          },
        },
        {
          $lookup: {
            from: "user_contacts",
            pipeline: [{ $match: { contact: loggedInUser._id } }],
            localField: "phone",
            foreignField: "phones.ph_no",
            as: "contact",
          },
        },
        {
          $unwind: {
            path: "$users",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unwind: {
            path: "$contact",
            preserveNullAndEmptyArrays: true,
          },
        },
        { $limit: +limit || 20 },
        { $skip: page > 0 ? +limit * (+page - 1) : 0 },
      ]);

      return res.status(200).json({
        success: true,
        data: callHistory,
      });
    } catch (error: any) {
      logError(error, req, res);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default callHistory;
