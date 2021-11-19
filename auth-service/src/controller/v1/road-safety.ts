import { Request, Response } from "express";
import { RoadSafety } from "../../models/road-safety";
import { User } from "../../models/user";

class RoadSafetyController {
  async update(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.user;
      let roadSafety: any = {};
      let isExist = await RoadSafety.findOne({ user: loggedInUser._id });
      if (!isExist) {
        let payload = {
          ...req.body,
          user: loggedInUser._id,
        };
        roadSafety = new RoadSafety(payload);
        await roadSafety.save();
      } else {
        roadSafety = await RoadSafety.findOneAndUpdate(
          { user: loggedInUser._id },
          { ...req.body },
          { upsert: true }
        );
      }
      let user = await User.findOne({ _id: loggedInUser._id }).lean();
      let modesPayload = {
        ...user.modes,
        roadSafetyStatus: {
          is_active: req.body.is_active,
          devices: roadSafety.devices,
          data: {
            selected_device: roadSafety.selected_device,
            display_to: roadSafety.display_to,
            auto_sms: roadSafety.auto_sms,
            notes: roadSafety.notes,
            status: roadSafety.status,
          },
        },
      };
      await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        { modes: modesPayload },
        { upsert: true, new: false }
      );
      return res
        .status(200)
        .json({ success: true, message: "Roadsafety updated successfully" });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default RoadSafetyController;