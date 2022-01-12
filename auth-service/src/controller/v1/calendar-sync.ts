import { Request, Response } from "express";

import { UserCalender } from "../../models/calenderSync";
import {getUserBll,getStatusBll} from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";

class CalenderSyncController {
  async add(req: Request, res: Response) {
    try {
      const loginUser: any = req.user;
      const userFind = await UserCalender.findOne({ user: loginUser._id });
      let calenderEvent: any = req.body;

      if (!userFind) {
        let payload: any = {
          calenders: calenderEvent.calenders,
          prioritize_calendar_events: calenderEvent.prioritize_calender_events,
          status: calenderEvent.status,
          user: loginUser._id,
        };
        const calenderEventSave = new UserCalender(payload);
        await calenderEventSave.save();
      } else {
        let payload: any = {
          calendars: calenderEvent.calendars,
          prioritize_calendar_events: calenderEvent.prioritize_calender_events,
          status: calenderEvent.status,
        };

        await UserCalender.findOneAndUpdate({ _id: userFind._id }, payload);
      }

      let status: any = await getStatusBll.getStatusByFindId(calenderEvent.status);
      let subStatus: any = await getStatusBll.getSubstatusByFindId(calenderEvent.subStatus);

      status = {
        ...status,
        subStatus,
      };

      let user = await getUserBll.findOneUserLean({ _id: loginUser._id });
      let modesPayload = {
        ...user.modes,
        syncCalender: {
          calenders: calenderEvent.calenders,
          prioritize_calender_events: calenderEvent.prioritize_calender_events,
          status: status,
        },
      };

      await getUserBll.findOneAndUpdate(loginUser._id, { modes: modesPayload },{ upsert: true, new: false });
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      return logError(error,req,res);
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
      return logError(error,req,res);
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
      return logError(error,req,res);
    }
  }
}

export default CalenderSyncController;
