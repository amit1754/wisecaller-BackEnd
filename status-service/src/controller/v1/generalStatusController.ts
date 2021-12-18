import { Request, Response } from "express";
import { generalStatusModel } from "../../models/generalStatus";
import { Types } from "mongoose";
import { globalTypeModel } from "../../models/globalType.Model";
class generalStatusController {
  async add(req: Request, res: Response) {
    try {
      const data: any = req.body;
      for (let i = 0; i < data.applicable_types.length; i++) {
        data.applicable_types[i] = Types.ObjectId(data.applicable_types[i]);
      }
      const addData = new generalStatusModel(data);
      await addData.save();
      res.status(200).json({
        success: true,
        message: "general status added successfully",
        data: [],
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
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
      res.status(500).json({ success: false, message: error.message });
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
      res.status(500).json({ success: false, message: error.message });
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
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default generalStatusController;
