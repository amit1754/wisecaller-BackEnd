import { Request, Response } from "express";
import { globalTypeModel } from "../../models/globalType.Model";
import { logError } from "@wisecaller/logger";

class GlobalTypeController {
  async add(req: Request, res: Response) {
    try {
      const data: any = req.body;
      const addData = new globalTypeModel(data);
      await addData.save();
      res.status(201).json();
    } catch (error) {
      return logError(error, req, res);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const request: any = req;
      const loggedInUser: any = request.body.user;
      let body: any = req.body;
      let id = req.params.id;

      await globalTypeModel.findOneAndUpdate({ _id: id }, body, {
        upsert: true,
        new: true,
      });

      res.status(201).json();
    } catch (error) {
      return logError(error, req, res);
    }
  }
  async delteType(req: Request, res: Response) {
    try {
      let id = req.params.id;

      await globalTypeModel.findOneAndDelete({ _id: id });

      res.status(201).json();
    } catch (error) {
      logError(error, req, res);
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
    } catch (error) {
      return logError(error, req, res);
    }
  }
}

export default GlobalTypeController;
