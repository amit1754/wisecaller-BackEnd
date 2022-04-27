import { Request, Response } from "express";
import { Coupon } from "../../model/coupon";
import { getUserBll } from "@wisecaller/user-service";
import moment from "moment";
import { Subscription } from "../../model/subscription";
import { UserSubscription } from "../../model/user_subscription";

class CouponController {
  async index(req: Request, res: Response) {
    try {
      let criteria = {};

      if (req.query.type) {
        Object.assign(criteria, { type: req.query.type });
      }

      if (req.query.coupon_code) {
        Object.assign(criteria, { coupon_code: req.query.coupon_code });
      }

      let coupons = await Coupon.findOne(criteria);

      res.status(200).json({ success: true, data: [] });
    } catch (error: any) {
      res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let payload: any = {
        ...req.body,
      };

      if (payload.is_deleted) {
        await Coupon.findOneAndRemove({ coupon_code: payload.coupon_code });
      } else {
        await Coupon.findOneAndUpdate(
          { coupon_code: payload.coupon_code },
          { ...payload, total_subscription: payload.can_use_for },
          { upsert: true, new: true }
        );
      }
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async bulkCouponCreation(req: Request, res: Response) {
    try {
      let payload = [...req.body];
      await Coupon.insertMany(payload);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async redeemCouponCode(req: Request, res: Response) {
    try {
      let loggedInUser = JSON.parse(JSON.stringify(req.body.user));
      delete req.body.user;
      let redeemed_coupon = await Coupon.findOne({
        coupon_code: req.body.coupon_code,
      });

      if (
        redeemed_coupon &&
        moment(redeemed_coupon.expires_at) > moment() &&
        redeemed_coupon?.can_use_for > 0
      ) {
        if (redeemed_coupon?.organization) {
          let active_subscriptions = loggedInUser?.active_subscriptions;
          let subscription: any = await Subscription.findOne({
            _id: redeemed_coupon.subscription,
          });

          let user_subscription_payload = {
            subscription: subscription._id,
            organization: subscription?.organization,
            coupon_code: redeemed_coupon?.coupon_code,
            quantity: 1,
            user: loggedInUser._id,
            subscription_created_date: moment().toISOString(),
            subscription_end_date: moment()
              .add(subscription.duration, "months")
              .toISOString(),
            is_active: true,
            user_subscription_date: moment().toISOString(),
          };

          if (active_subscriptions?.length) {
            let user_active_subscription: any = active_subscriptions.find(
              (item: any) => item.subscription === redeemed_coupon.subscription
            );

            if (user_active_subscription) {
              let diff_days = moment(
                user_active_subscription.subscription_end_date
              ).diff(moment(), "days");
              user_subscription_payload.subscription_end_date = moment(
                user_subscription_payload.subscription_end_date
              )
                .add(diff_days, "days")
                .toISOString();
            }
          }

          let user_subscription = new UserSubscription(
            user_subscription_payload
          );
          await user_subscription.save();

          active_subscriptions.push(user_subscription);

          await getUserBll.findOneAndUpdate(
            { _id: loggedInUser._id },
            { active_subscriptions: active_subscriptions },
            { upsert: true, new: true }
          );
        }
        let updated_coupon = await Coupon.findOneAndUpdate(
          { coupon_code: req.body.coupon_code },
          { $inc: { can_use_for: -1, used_subscription: 1 } },
          { upsert: true, new: true }
        );
        return res.status(200).json({ success: true, data: updated_coupon });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "Invalid coupon code!" });
      }
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error });
    }
  }
}

export default CouponController;
