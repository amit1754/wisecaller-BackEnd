import { Request, Response } from "express";

import { UserCalender } from "../../models/calenderSync";
import { User } from "../../models/user";
import { UserStatus } from "../../models/status";
import { UserSubStatus } from "../../models/subStatus";
import { Types } from "mongoose";

class CalenderSyncController {
  async add(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const userFind = await UserCalender.findOne({ user: loginUser._id });
      let calenderEvent: any = req.body;

      if (!userFind) {
        let payload: any = {
          calendars: calenderEvent.calendars,
          prioritize_calendar_events: calenderEvent.prioritize_calendar_events,
          status: calenderEvent.status,
          user: loginUser._id,
        };
        const calenderEventSave = new UserCalender(payload);
        await calenderEventSave.save();
      } else {
        let payload: any = {
          calendars: calenderEvent.calendars,
          prioritize_calendar_events: calenderEvent.prioritize_calendar_events,
          status: calenderEvent.status,
        };

        await UserCalender.findOneAndUpdate({ _id: userFind._id }, payload);
      }

      let status: any = await UserStatus.findById(calenderEvent.status, {
        logo: 0,
      });
      let subStatus: any = await UserSubStatus.findById(
        calenderEvent.subStatus,
        { logo: 0 }
      );

      status = {
        ...status._doc,
        subStatus,
      };

      let user = await User.findOne({ _id: loginUser._id }).lean();
      let modesPayload = {
        ...user.modes,
        syncCalender: {
          calenders: calenderEvent.calendars,
          prioritize_calender_events: calenderEvent.prioritize_calendar_events,
          status: status,
        },
      };

      await User.findOneAndUpdate(
        { _id: loginUser._id },
        { modes: modesPayload },
        { upsert: true, new: false }
      );
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;

      const userContactFind = await UserCalender.findOne(
        {
          user: loginUser?._id,
        },
        { "calendars.is_deleted": 0 }
      ).populate("status");

      delete userContactFind.status.logo;
      res.status(200).json({
        success: true,
        message: "calenderEvent list get successfully",
        data: userContactFind,
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async deleteEmail(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const userFind = await UserCalender.findOne({ user: loginUser?._id });
      if (userFind != null) {
        let removeEmail = await UserCalender.findOneAndUpdate(
          { user: loginUser._id },
          { email: null }
        );
        if (removeEmail) {
          res.status(200).json({
            success: true,
            message: "Email Remove Successfully",
            data: [],
          });
        } else {
          throw new Error("Email is not removed ");
        }
      } else {
        throw new Error("Calender Event not found");
      }
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default CalenderSyncController;
