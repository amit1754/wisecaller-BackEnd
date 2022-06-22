import { Request, Response } from "express";
import snsClient from "../../utils/snsClient";
import event from "./event-handler";
import { logError } from "@wisecaller/logger";
import { User } from "../../models/user";
import { UserSubscription } from "../../models/user-subscription";
const EventHandler = new event();

class MessageController {
  async index(req: Request, res: Response) {
    try {
      let event = { ...req.body };
      await EventHandler.index(event);
      return res.status(200).json({ success: true });
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async callBack(req: Request, res: Response) {
    try {
      let request: any = req;
      let loggedInUser: any = request.body.user;
      let event = {
        type: "CALL_BACK_REQUEST",
        title: `${loggedInUser.first_name} ${loggedInUser.last_name} has requested for a callback.`,
        user: loggedInUser,
        to: req.body.to,
        text: req.body.message,
      };
      await EventHandler.index(event);
      res.status(200).json({ success: true });
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async customNotification(req: Request, res: Response) {
    try {
      let request: any = req;
      let loggedInUser: any = request.body.user;
      let event = {
        type: "CUSTOM_NOTIFICATION",
        title: req.body.title,
        user: loggedInUser,
        to: [...req.body.to],
        send_all: req.body.send_all,
        text: req.body.text,
      };
      await snsClient.publishToSNS(event);
      res.status(200).json({ success: true });
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async sendCustomNotification(req: Request, res: Response) {
    try {
      let request: any = req;
      let loggedInUser: any = request.body.user;
      let event: any = {
        type: "CUSTOM_NOTIFICATION",
        title: req.body.title,
        user: loggedInUser,
        to: [],
        send_all: req.body.send_all,
        text: req.body.text,
        thumbnail: loggedInUser.profile,
      };

      let payload = {
        ...req.body,
      };

      let criteria = {};

      if (req.body.selected_users) {
        Object.assign(criteria, { _id: { $in: req.body.selected_users } });
      }

      if (loggedInUser.role === "ORGANIZATION") {
        let subscriptions = await UserSubscription.find(
          {
            organization: req.body.user._id,
          },
          { user: 1, organization: 1 }
        );

        subscriptions = subscriptions.map((item: any) => item.user);

        Object.assign(criteria, {
          _id: { $in: subscriptions },
          "active_subscriptions.organization": loggedInUser._id,
        });
      }

      if (payload.filters.search) {
        payload.filters.search = payload.filters.search.replace("+", "");
        Object.assign(criteria, {
          $or: [
            { first_name: { $regex: payload.filters.search, $options: "i" } },
            { last_name: { $regex: payload.filters.search, $options: "i" } },
            { phone: { $regex: payload.filters.search, $options: "i" } },
            { email: { $regex: payload.filters.search, $options: "i" } },
          ],
        });
      }

      if (payload.filters.subscription) {
        Object.assign(criteria, {
          "active_subscriptions.subscription": payload.filters.subscription,
        });
      }

      if (payload.filters.coupon_code) {
        Object.assign(criteria, {
          "active_subscriptions.coupon_code": payload.filters.coupon_code,
        });
      }

      if (payload.filters.road_safety) {
        Object.assign(criteria, {
          "modes.roadSafety.is_active": payload.filters.road_safety,
        });
      }

      if (payload.filters.calender_sync) {
        Object.assign(criteria, {
          $and: [
            { "modes.syncCalender.is_active": { $exists: true } },
            { "modes.syncCalender.is_active": payload.filters.calender_sync },
          ],
        });
      }

      if (payload.filters.work_life_balance) {
        Object.assign(criteria, {
          "modes.workLifeBalance.is_active": payload.filters.work_life_balance,
        });
      }

      if (payload.filters.registered_date) {
        Object.assign(criteria, {
          createdAt: {
            $gte: payload.filters.registered_date[0],
            $lte: payload.filters.registered_date[1],
          },
        });
      }

      if (payload.filters.subscribed_date) {
        Object.assign(criteria, {
          "active_subscriptions.subscription_created_date": {
            $gte: payload.filters.subscribed_date[0],
            $lte: payload.filters.subscribed_date[1],
          },
        });
      }

      let users = await User.find(criteria);
      for (const item of users) {
        let user: any = item;
        for (const item of user.phones) {
          let phone: any = item;
          event.to.push(phone.no);
        }
      }
      await snsClient.publishToSNS(event);
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(200).json({ success: false, message: error });
    }
  }
}

export default MessageController;
