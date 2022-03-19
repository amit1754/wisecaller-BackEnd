import { Request, Response } from "express";
import { generalStatusModel } from "../../models/generalStatus";
import { Types } from "mongoose";
import { logError } from "@wisecaller/logger";

class generalStatusController {
  async add(req: Request, res: Response) {
    try {
      const data: any = req.body;
      for (let i = 0; i < data.applicable_types.length; i++) {
        data.applicable_types[i] = new Types.ObjectId(data.applicable_types[i]);
      }
      const addData = new generalStatusModel(data);
      await addData.save();
      res.status(200).json({
        success: true,
        message: "general status added successfully",
        data: [],
      });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async update(req: Request, res: Response) {
    try {
      let body: any = req.body;
      let id = req.params.id;

      await generalStatusModel.findOneAndUpdate({ _id: id }, body, {
        upsert: true,
        new: true,
      });

      res.status(200).json({
        success: true,
        message: "general status update successfully",
        data: [],
      });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async delteType(req: Request, res: Response) {
    try {
      let id = req.params.id;

      await generalStatusModel.findOneAndDelete({ _id: id });

      res.status(200).json({
        success: true,
        message: "general status deleted successfully",
        data: [],
      });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
  async get(req: Request, res: Response) {
    try {
      let globalType = await generalStatusModel.aggregate([
        {
          $lookup: {
            from: "globaltypes",
            localField: "applicable_types",
            foreignField: "_id",
            as: "applicableType",
          },
        },
      ]);
      res.status(200).json({
        success: true,
        message: "general status get successful",
        data: globalType,
      });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
}

export default generalStatusController;
