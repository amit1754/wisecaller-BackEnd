import { Request, Response } from "express";
import { ICustomStatus } from "../../interfaces/status";
import { customStatus } from "../../models/customStatus";
import { WorkLife } from "../../models/worklIfe";

class CustomStatusController {
  async add(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;

      const length: number = req.body.length;
      for (let i = 0; i < length; i++) {
        let payload: ICustomStatus = {
          ...req.body[i],
          user: loggedInUser._id,
        };
        const status = new customStatus(payload);
        await status.save();
      }
      res.status(200).json({
        success: true,
        message: "User status added successfully",
        data: [],
      });
    } catch (error: any) {
      if (error.code === 11000) {
        res
          .status(500)
          .json({ success: false, message: "customId is must be unique." });
      } else {
        res.status(500).json({ success: false, message: error.message });
      }
    }
  }
  async update(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      let body: any = req.body;
      const length: number = body.status.length;
      for (let i = 0; i < length; i++) {
        if (body.status[i].is_deleted) {
          await customStatus.findOneAndRemove({
            customId: body.status[i].customId,
            user: loggedInUser._id,
          });
        } else {
          await customStatus.findOneAndUpdate(
            { customId: body.status[i].customId, user: loggedInUser._id },
            body.status[i],
            {
              upsert: true,
              new: true,
            }
          );
        }
      }
      if (body.workLife) {
        const worklifeData: any = body.workLife;
        const update = await WorkLife.findOneAndUpdate(
          { user: loggedInUser._id },
          { Excluded_dates: worklifeData.Excluded_dates },
          {
            upsert: true,
            new: true,
          }
        );
      }

      res.status(200).json({
        success: true,
        message: "User status update successfully",
        data: [],
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async delteStatus(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      // await customStatus.findOneAndRemove({
      //   _id: req.params.id,
      //   user: loggedInUser._id,
      // });
      await customStatus.findOneAndUpdate(
        { _id: req.params.id, user: loggedInUser._id },
        { is_deleted: true },
        {
          upsert: true,
          new: true,
        }
      );
      res.status(200).json({
        success: true,
        message: "User status deleted successfully",
        data: [],
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async get(req: Request, res: Response) {
    try {
      let page: any = req.query.page;
      let limit: any = req.query.limit;
      let where,
        timestamp: any = req.query.timestamp;
      if (timestamp) {
        where = {
          start_date: { $gte: new Date(timestamp).toISOString() },
        };
      }
      console.log('where :>> ', where);

      const loggedInUser: any = req.user;
      const getStatus: any = await customStatus.aggregate([
        {
          $match: { 
            user: loggedInUser._id, 
            start_date: { $gte: new Date(timestamp)}
          }
        },
        {
          $lookup: {
            from: "usersatus",
            localField: "status",
            foreignField: "_id",
            as: "userStatus",
          },
        },
        { $unwind: { path: "$userStatus", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "usersubstatuses",
            localField: "substatus`",
            foreignField: "_id",
            as: "userSubStatus",
          },
        },
        {
          $unwind: { path: "$userSubStatus", preserveNullAndEmptyArrays: true },
        },
        {
          $skip: page > 0 ? +limit * (+page - 1) : 0,
        },
        {
          $limit: +limit || 20,
        },
      ]);

      const worklife: any = await WorkLife.findOne(
        { user: loggedInUser._id },
        { Excluded_dates: 1, _id: 0 }
      );

      res.status(200).json({
        sucess: true,
        message: "getdata successfully",
        data: {
          status: getStatus,
          worklife: {
            Excluded_dates: worklife ? worklife.Excluded_dates : null,
          },
        },
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default CustomStatusController;
