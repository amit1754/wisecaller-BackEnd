import { Request, Response, NextFunction } from "express";
import { IStatus } from "../../interfaces/status";
import { User } from '../../models/order'
class StatusController {
  async addStatus(req: Request, res: Response) {
    try {
      const payload: IStatus = {
        ...req.body,
      };
      const user = new User(payload);
      await user.save();
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      let userEvent = await User.find()
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

      let user = await User.findOneAndUpdate(
        { _id: id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      res.status(200).json({ success: true, message: "user Event Status update successfully", data: user });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id }: any = req.params;


      let user = await User.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Event Status delete sucessfully", data: user });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

}

export default StatusController;
