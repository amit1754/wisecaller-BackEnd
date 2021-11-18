import { Request, Response, NextFunction } from "express";
import { IStatus } from "../../interfaces/status";
import { UserStatus } from "../../models/status";
class StatusController {
  async addStatus(req: Request, res: Response) {
    try {
      const payload: IStatus = {
        ...req.body,
      };
      const user = new UserStatus(payload);
      await user.save();
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      let userEvent = await UserStatus.find();
      res.status(200).json({ success: true, data: userEvent });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id }: any = req.params;
      const payload: any = {
        ...req.body,
      };

      let user = await UserStatus.findOneAndUpdate({ _id: id }, payload, {
        upsert: true,
        new: true,
      });
      res
        .status(200)
        .json({
          success: true,
          message: "user Event Status update successfully",
          data: user,
        });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id }: any = req.params;

      let user = await UserStatus.findByIdAndDelete(id);
      res
        .status(200)
        .json({
          success: true,
          message: "Event Status delete sucessfully",
          data: user,
        });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default StatusController;
