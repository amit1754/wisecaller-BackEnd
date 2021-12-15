import { Request, Response } from "express";
import { RoadSafety } from "../../models/road-safety";
import { User } from "../../models/user";
import { UserStatus } from "../../models/status";
import snsClient from "../../utils/snsClient";

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
          { upsert: true, new: true }
        );
      }

      let defaultStatus = await UserStatus.findOne({
        applicable_types: "61a190ae88e2950009a58a61",
      }).populate({
        path: "applicable_types",
        model: "globalType",
      });

      let user = await User.findOne({ _id: loggedInUser._id }).lean();
      let modesPayload = {
        ...user.modes,
        roadSafety: {
          is_active: req.body.is_active,
          devices: roadSafety.devices,
          data: {
            selected_device: roadSafety.selected_device,
            display_to: roadSafety.display_to,
            auto_sms: roadSafety.auto_sms,
            notes: roadSafety.notes,
            status: defaultStatus,
          },
        },
      };
      await User.findOneAndUpdate(
        { _id: loggedInUser._id },
        { modes: modesPayload },
        { upsert: true, new: false }
      );

      let snsPayload = {
        type: "STATUS_UPDATE",
        data: modesPayload.roadSafety,
        title: "Status Update",
        send_all: true,
      };
      await snsClient.publishToSNS(snsPayload);
      return res.status(200).json({
        success: true,
        message: "Roadsafety updated successfully",
        data: modesPayload.roadSafety,
      });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default RoadSafetyController;
