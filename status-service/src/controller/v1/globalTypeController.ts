import { Request, Response } from "express";
import { globalTypeModel } from "../../models/globalType.Model";
class GlobalTypeController {
  async add(req: Request, res: Response) {
    try {
      const data: any = req.body;
      const addData = new globalTypeModel(data);
      await addData.save();
      res.status(200).json({
        success: true,
        message: "gobal type added successfully",
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

      await globalTypeModel.findOneAndUpdate({ _id: id }, body, {
        upsert: true,
        new: true,
      });

      res.status(200).json({
        success: true,
        message: "global Type update successfully",
        data: [],
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async delteType(req: Request, res: Response) {
    try {
      let id = req.params.id;

      await globalTypeModel.findOneAndDelete({ _id: id });

      res.status(200).json({
        success: true,
        message: "Global type deleted successfully",
        data: [],
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async get(req: Request, res: Response) {
    try {
      let globalType = await globalTypeModel.find().sort({ order: 1 });
      res.status(200).json({
        success: true,
        message: "global type get successful",
        data: globalType,
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default GlobalTypeController;
