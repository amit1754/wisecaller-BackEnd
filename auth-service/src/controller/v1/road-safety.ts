import { Request, Response } from "express";
import { RoadSafety } from "../../models/road-safety";
import { getUserBll, getStatusBll } from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";

class RoadSafetyController {
  async update(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
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
      let road_safety_type = await getStatusBll.getGlobalType({
        type: "ROAD_SAFETY",
      });
      let defaultStatus = await getStatusBll.getStatusByPayload({
        applicable_types: road_safety_type._id,
      });

      let user = await getUserBll.findOneUserLean({ _id: loggedInUser._id });
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
      await getUserBll.findOneAndUpdate(
        loggedInUser._id,
        { modes: modesPayload },
        { upsert: true, new: false }
      );
      return res.status(200).json(modesPayload.roadSafety);
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
}

export default RoadSafetyController;
