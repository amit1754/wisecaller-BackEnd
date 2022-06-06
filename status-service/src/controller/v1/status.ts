import { Request, Response } from "express";
import { IStatus, ISubStatus } from "../../interfaces/status";
import { UserStatus } from "../../models/status";
import { UserSubStatus } from "../../models/subStatus";
import { globalTypeModel } from "../../models/globalType.Model";
import { deletefile } from "@wisecaller/s3";
import SNSClient from "@wisecaller/sns";
import { logError } from "@wisecaller/logger";

class StatusController {
  async addStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
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
        await SNSClient.publishToSNS(snsPayload);
        res.status(201).json();
      } else {
        return res.status(400).json({
          error: "You are not authorize person to access this resource",
        });
        throw new Error("you are not authorize person to access this resource");
      }
    } catch (error) {
      return logError(error, req, res);
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const global_status = await globalTypeModel.aggregate([
        { $match: {} },
        {
          $lookup: {
            from: "userstatus",
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

      res.status(200).json(global_status);
    } catch (error) {
      return logError(error, req, res);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
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
        await SNSClient.publishToSNS(snsPayload);
        res.status(200).json(StatusUpdate);
      } else {
        return res.status(400).json({
          error: "You are not authorize person to access this resource",
        });
        throw new Error("you are not authorize person to access this resource");
      }
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
      if (loggedInUser.role != "ADMIN") {
        return res.status(401).json({
          error: "You are not authorize person to access this resource",
        });
      } else {
        const { id }: any = req.params;

        let user = await UserStatus.findByIdAndDelete(id);
        res.status(200).json(user);
      }
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async addSubStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
      if (loggedInUser?.role === "ADMIN") {
        const reqPayload: any = req;
        const payload: ISubStatus = {
          ...req.body,
          logo: reqPayload.file ? reqPayload.file.key : null,
          user: null,
        };
        const status = new UserSubStatus(payload);
        status.save();
        res.status(201).json();
      } else {
        return res.status(400).json({
          error: "You are not authorize person to access this resource",
        });
        throw new Error("you are not authorize person to access this resource");
      }
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async updateSubStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
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
        res.status(200).json(StatusUpdate);
      } else {
        return res.status(401).json({
          error: "You are not authorize person to access this resource",
        });
      }
    } catch (error) {
      return logError(error, req, res);
    }
  }
  async deleteSub(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
      if (loggedInUser.role != "ADMIN") {
        return res.status(401).json({
          error: "You are not authorize person to access this resource",
        });
      } else {
        const { id }: any = req.params;
        let user = await UserSubStatus.findByIdAndDelete(id);
        res.status(201).json();
      }
    } catch (error) {
      return logError(error, req, res);
    }
  }
}

export default StatusController;
