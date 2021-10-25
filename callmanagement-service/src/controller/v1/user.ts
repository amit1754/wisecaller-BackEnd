import { Request, Response } from "express";
import { User } from "../../models/user";

class UserController {
  async show(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      let user = await User.findOne({ _id: loggedInUser._id });
      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const loggedInUser: any = req.user;
      const payload: any = {
        ...req.body,
      };

      let user = await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

const controller = new UserController();
export default UserController;
