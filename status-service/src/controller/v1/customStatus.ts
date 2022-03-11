import { Request, Response } from "express";
import { customStatus } from "../../models/customStatus";
import { WorkLifeBalance } from "../../models/worklIfe";

class CustomStatusController {
  async add(req: Request, res: Response) {
    try {
      
       const reqPayload: any = req;
      const loggedInUser: any = reqPayload.user;
      let body: any = req.body;
      const length: number = body.length;
      for (let i = 0; i < length; i++) {
        if (body[i].is_deleted) {
          await customStatus.findOneAndRemove({
            customId: body[i].customId,
            user: loggedInUser._id,
          });
        } else {
          await customStatus.findOneAndUpdate(
            { customId: body[i].customId, user: loggedInUser._id },
            body[i],
            {
              upsert: true,
              new: true,
            }
          );
        }
      }

      res.status(200).json({
        success: true,
        message: "User status added successfully",
        data: [],
      });
    } catch (error:any) {
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
     const reqPayload: any = req;
      const loggedInUser: any = reqPayload.user;
      let body: any = req.body;
      if (body.status && body.status.length) {
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
      }
      if (body.workLife) {
        const worklifeData: any = body.workLife;
        let date1 = worklifeData.Excluded_dates.map((x: any) =>
          new Date(x).toISOString()
        );

        const update = await WorkLifeBalance.findOneAndUpdate(
          { user: loggedInUser._id },
          { excluded_dates: date1 },
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
    } catch (error:any) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async delteStatus(req: Request, res: Response) {
    try {
     const reqPayload: any = req;
      const loggedInUser: any = reqPayload.user;
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
    } catch (error:any) {
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

      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.user;
      const getStatus: any = await customStatus.aggregate([
        {
          $match: {
            user: loggedInUser._id,
            start_date: { $gte: new Date(timestamp) },
          },
        },
        {
          $lookup: {
            from: "userstatus",
            localField: "status",
            foreignField: "_id",
            as: "userStatus",
          },
        },
        { $unwind: { path: "$userStatus", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "usersubstatuses",
            localField: "substatus",
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

      const worklife: any = await WorkLifeBalance.findOne(
        { user: loggedInUser._id },
        { excluded_dates: 1, _id: 0 }
      );

      res.status(200).json({
        sucess: true,
        message: "getdata successfully",
        data: {
          status: getStatus,
          worklife: {
            excluded_dates: worklife ? worklife.excluded_dates : null,
          },
        },
      });
    } catch (error:any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default CustomStatusController;
