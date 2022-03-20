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
      const request: any = req;
      let user: any = request.body.user;
      let coupon: any = await Coupon.findOne({
        coupon_code: req.body.coupon_code,
      });
      let coupon_expiry_date: string = moment(coupon.expires_at)
        .utc(false)
        .toISOString();
      let current_date = moment().utc(false).toISOString();
      let diff = moment(coupon_expiry_date).diff(moment(current_date), "days");
      if ((coupon && coupon.can_use_for > 0, diff >= 0)) {
        if (coupon.organization) {
          let subscription: any = await Subscription.findOne({
            _id: coupon.subscription,
          });

          let payload = {
            subscription: coupon.subscription,
            organization: coupon.organization,
            coupon_code: coupon.coupon_code,
            quantity: 1,
            user: user._id,
            subscription_created_date: moment().toISOString(),
            subscription_end_date: coupon_expiry_date,
          };

          let user_active_subscriptions: any = await UserSubscription.findOne({
            user: user._id,
            subscription: payload.subscription,
            subscription_end_date: { $gte: moment().toISOString() },
            is_revoked: false,
          });

          if (user_active_subscriptions?.coupon_code !== payload.coupon_code) {
            let organization_subscription =
              await UserSubscription.findOneAndUpdate(
                { user: user._id },
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
            coupon = await Coupon.findOneAndUpdate(
              { coupon_code: req.body.coupon_code },
              { $inc: { can_use_for: -1, used_subscription: 1 } },
              { upsert: true, new: true }
            );
          } else {
            return res
              .status(200)
              .json({ success: false, message: "Coupon already used!" });
          }
        } else {
          coupon = await Coupon.findOneAndUpdate(
            { coupon_code: req.body.coupon_code },
            { $inc: { can_use_for: -1, used_subscription: 1 } },
            { upsert: true, new: true }
          );
        }
        return res.status(200).json({ success: true, data: coupon });
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
