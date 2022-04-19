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
    } catch (error: any) {
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
    } catch (error: any) {
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
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async sendCustomNotification(req: Request, res: Response) {
    try {
      let request: any = req;
      let loggedInUser: any = request.user;
      let event: any = {
        type: "CUSTOM_NOTIFICATION",
        title: req.body.title,
        user: loggedInUser,
        to: [],
        send_all: req.body.send_all,
        text: req.body.text,
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
          organization_subscription: { $exists: true, $ne: null },
          "organization_subscription.organization": loggedInUser._id,
          "organization_subscription.is_revoked": false,
        });
      }

      if (req.body.search) {
        req.body.search = req.body.search.replace("+", "");
        Object.assign(criteria, {
          $or: [
            { first_name: { $regex: req.body.search, $options: "i" } },
            { last_name: { $regex: req.body.search, $options: "i" } },
            { phone: { $regex: req.body.search, $options: "i" } },
            { email: { $regex: req.body.search, $options: "i" } },
          ],
        });
      }

      if (req.body.subscription) {
        Object.assign(criteria, {
          "organization_subscription.subscription": req.body.subscription,
        });
      }

      if (req.body.coupon_code) {
        Object.assign(criteria, {
          "organization_subscription.coupon_code": req.body.coupon_code,
        });
      }

      if (req.body.road_safety) {
        Object.assign(criteria, {
          "modes.roadSafety.is_active": req.body.road_safety,
        });
      }

      if (req.body.calender_sync) {
        Object.assign(criteria, {
          $and: [
            { "modes.syncCalender.is_active": { $exists: true } },
            { "modes.syncCalender.is_active": req.body.calender_sync },
          ],
        });
      }

      if (req.body.work_life_balance) {
        Object.assign(criteria, {
          "modes.workLifeBalance.is_active": req.body.work_life_balance,
        });
      }

      if (req.body.registered_date) {
        Object.assign(criteria, {
          createdAt: req.body.registered_date,
        });
      }

      if (req.body.subscribed_date) {
        Object.assign(criteria, {
          "organization_subscription.subscription_created_date":
            req.body.subscription_created_date,
        });
      }

      let users = await User.find(criteria);
      for (const user of users) {
        for (const item of user.phones) {
          let phone: any = item;
          event.to.push(phone.no);
        }
      }
      await snsClient.publishToSNS(event);
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default MessageController;
