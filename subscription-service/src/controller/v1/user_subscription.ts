import { Request, Response } from "express";
import { Subscription } from "../../model/subscription";
import { getUserBll } from "@wisecaller/user-service";
import { UserSubscription } from "../../model/user_subscription";
import VerifyJWTToken from "../../utils/verify-jwt";
import moment from "moment";

class UserSubscriptionController {
  async index(req: Request, res: Response) {
    try {
      let criteria = {};

      let user_subscriptions = await UserSubscription.find(criteria);
      return res.status(200).json({ success: true, data: user_subscriptions });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let loggedInUser = req.body.user;
      delete req.body.user;

      let payload = {
        ...req.body,
      };

      let subscription = await Subscription.findById(payload.subscription);
      let active_subscriptions = loggedInUser.active_subscriptions;

      let user_subscription_payload = {
        ...payload,
        quantity: 1,
        user: loggedInUser._id,
        subscription_created_date: moment().toDate(),
        subscription_end_date: moment()
          .add(subscription.duration, "months")
          .toDate(),
      };

      active_subscriptions.map((item: any) => {
        if (item.subscription.toString() === payload.subscription) {
          Object.assign(item, {
            subscription_created_date:
              user_subscription_payload.subscription_created_date,
            subscription_end_date:
              user_subscription_payload.subscription_end_date,
          });
        }
      });

      await UserSubscription.findOneAndUpdate(
        {
          user: loggedInUser._id,
          subscription: payload.subscription,
          is_revoked: false,
        },
        user_subscription_payload,
        { upsert: true, new: true }
      );

      await getUserBll.findOneAndUpdate(
        loggedInUser._id,
        { active_subscriptions: active_subscriptions },
        { upsert: true, new: true }
      );

      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async revoke(req: Request, res: Response) {
    try {
      let loggedInUser = req.body.user;
      delete req.body.user;

      let payload = {
        ...req.body,
      };

      let active_subscriptions = loggedInUser.active_subscriptions;

      if (active_subscriptions?.length) {
        let subscription_index = active_subscriptions.findIndex(
          (item: any) => item.subscription.toString() === payload.subscription
        );
        active_subscriptions.splice(subscription_index, 1);
      }

      await UserSubscription.findOneAndUpdate(
        {
          user: loggedInUser._id,
          subscription: payload.subscription,
          is_revoked: false,
        },
        {
          is_revoked: true,
          revoked_reason: payload.reason,
        },
        {
          upsert: true,
          new: true,
        }
      );

      await getUserBll.findOneAndUpdate(
        loggedInUser,
        { active_subscriptions: active_subscriptions },
        { upsert: true, new: true }
      );

      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default UserSubscriptionController;
