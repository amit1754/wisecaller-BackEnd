import e, { Request, Response } from "express";
import { IStatus, ISubStatus } from "../../interfaces/status";
import { UserStatus } from "../../models/status";
import { UserSubStatus } from "../../models/subStatus";
import { globalTypeModel } from "../../models/globalType.Model";
import { deletefile } from "../../middlewares/uploadService";
import snsClient from "../../utils/snsClient";
class StatusController {
  async addStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = req.user;
      if (loggedInUser.role === "ADMIN") {
        const payload: IStatus = {
          ...req.body,
          logo: reqPayload.file ? reqPayload.file.key : null,
          user: null,
        };

        const status = new UserStatus(payload);
        await status.save();
        let snsPayload = {
          type: "GLOBAL_STATUS_UPDATE",
          data: payload,
          title: "Global Status Update",
        };
        await snsClient.publishToSNS(snsPayload);
        res.status(200).json({
          success: true,
          message: "User status added successfully",
          data: [],
        });
      } else {
        throw new Error("you are not authorize person to access this resource");
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      const global_status = await globalTypeModel.aggregate([
        { $match: {} },
        {
          $lookup: {
            from: "usersatus",
            localField: "_id",
            foreignField: "applicable_types",
            as: "global_statuses",
          },
        },
      ]);

      for (const [key, status] of Object.entries(global_status)) {
        for (const [key, global] of Object.entries(status.global_statuses)) {
          let temp: any = global;
          let sub = await UserSubStatus.find({ parentId: temp._id });
          Object.assign(global, { sub_status: sub });
        }
      }
      // global_status.map((status) => {
      //   status.global_statuses.map((item: any) => {
      //     const sub_statuses = await UserSubStatus.find({});
      //     console.log(sub);
      //   });
      // });

      // let userEvent = await UserStatus.aggregate([
      //   {
      //     $lookup: {
      //       from: "usersubstatuses",
      //       localField: "_id",
      //       foreignField: "parentId",
      //       as: "subCategory",
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: "globaltypes",
      //       localField: "applicable_types",
      //       foreignField: "_id",
      //       as: "applicableType",
      //     },
      //   },
      // ]);
      res.status(200).json({
        success: true,
        message: "global status get successfully",
        data: global_status,
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = req.user;
      if (loggedInUser.role === "ADMIN") {
        const { id }: any = req.params;
        let statusFind = await UserStatus.findById(id);
        let payload: any = {
          ...reqPayload.body,
        };
        if (reqPayload.file) {
          if (statusFind.logo) {
            await deletefile(statusFind.logo);
          }
          payload = {
            ...payload,
            logo: reqPayload.file.key,
          };
        }

        let StatusUpdate = await UserStatus.findOneAndUpdate(
          { _id: id },
          payload,
          {
            upsert: true,
            new: true,
          }
        );
        let snsPayload = {
          type: "GLOBAL_STATUS_UPDATE",
          data: StatusUpdate,
          title: "Global Status Update",
        };
        await snsClient.publishToSNS(snsPayload);
        res.status(200).json({
          success: true,
          message: "global Status update successfully",
          data: StatusUpdate,
        });
      } else {
        throw new Error("you are not authorize person to access this resource");
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      if (loginUser.role != "ADMIN") {
        res.status(401).json({
          success: false,
          message: "you are not access to this resource",
        });
      } else {
        const { id }: any = req.params;

        let user = await UserStatus.findByIdAndDelete(id);
        res.status(200).json({
          success: true,
          message: "Global Status delete sucessfully",
          data: user,
        });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async addSubStatus(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      if (loggedInUser?.role === "ADMIN") {
        const reqPayload: any = req;
        const payload: ISubStatus = {
          ...req.body,
          logo: reqPayload.file ? reqPayload.file.key : null,
          user: null,
        };
        const status = new UserSubStatus(payload);
        status.save();
        res.status(200).json({
          success: true,
          message: "global Sub-Status added sucessfully",
          data: [],
        });
      } else {
        throw new Error("you are not authorize person to access this resource");
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async updateSubStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = req.user;
      if (loggedInUser?.role === "ADMIN") {
        const { id }: any = req.params;
        let payload: any = {
          ...req.body,
        };
        if (reqPayload.file) {
          payload = {
            ...payload,
            logo: reqPayload.file.key,
          };
          let statusFind = await UserSubStatus.findById(id);
          if (statusFind.logo) {
            await deletefile(statusFind.logo);
          }
        }

        let StatusUpdate = await UserSubStatus.findOneAndUpdate(
          { _id: id },
          payload,
          {
            upsert: true,
            new: true,
          }
        );
        res.status(200).json({
          success: true,
          message: "global sub status update successfully",
          data: StatusUpdate,
        });
      } else {
        throw new Error("you are not authorize person to access this resource");
      }
    } catch (error: any) {
      console.log(error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async deleteSub(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      if (loginUser.role != "ADMIN") {
        res.status(401).json({
          success: false,
          message: "you are not access to this resource",
        });
      } else {
        const { id }: any = req.params;
        let user = await UserSubStatus.findByIdAndDelete(id);
        res.status(200).json({
          success: true,
          message: "Global Sub Status delete sucessfully",
          data: [],
        });
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default StatusController;
