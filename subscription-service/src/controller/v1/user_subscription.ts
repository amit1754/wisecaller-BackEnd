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
      let payload = {
        ...req.body,
      };
      let token: any = req.headers.authorization;
      let vefied_token: any = VerifyJWTToken(token.split("Bearer ")[1]);
      let user: any = await getUserBll.findOneUser({ _id: vefied_token._id });
      let subscription: any = await Subscription.findById(payload.subscription);

      payload = {
        ...payload,
        quantity: 1,
        user: user._id,
        subscription_created_date: moment().toISOString(),
        subscription_end_date: moment()
          .add(subscription.duration, "months")
          .toISOString(),
      };

      if (payload.organization) {
        let organization_subscription = await UserSubscription.findOneAndUpdate(
          { user: user._id, organization: { $exists: true } },
          payload,
          {
            upsert: true,
            new: true,
          }
        );
        await getUserBll.findOneAndUpdate(
          { _id: user._id },
          { organization_subscription: organization_subscription },
          { upsert: true, new: true }
        );
      } else {
        let user_subscription = await UserSubscription.findOneAndUpdate(
          { user: user._id, organization: { $exists: false } },
          payload,
          {
            upsert: true,
            new: true,
          }
        );
        await getUserBll.findOneAndUpdate(
          { _id: user._id },
          { user_subscription: user_subscription },
          { upsert: true, new: true }
        );
      }

      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async revoke(req: Request, res: Response) {
    try {
      let token: any = req.headers.authorization;
      let vefied_token: any = VerifyJWTToken(token.split("Bearer ")[1]);
      let user: any = await getUserBll.findOneUser({ _id: vefied_token._id });
      await UserSubscription.findOneAndUpdate(
        {
          user: user._id,
          organization: {
            $exists: req.body.type === "ORGANIZATION" ? true : false,
          },
        },
        {
          is_revoked: true,
          revoked_reason: req.body.reason,
        },
        { upsert: true, new: true }
      );
      let user_payload = {};
      if (req.body.type === "ORGANIZATION") {
        Object.assign(user_payload, { organization_subscription: null });
      } else {
        Object.assign(user_payload, { user_subscription: null });
      }
      await getUserBll.findOneAndUpdate({ _id: user._id }, user_payload, {
        upsert: true,
        new: true,
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default UserSubscriptionController;
