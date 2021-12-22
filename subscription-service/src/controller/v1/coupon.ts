import { Request, Response } from "express";
import { Coupon } from "../../model/coupon";
import VerifyJWTToken from "../../utils/verify-jwt";
import { User } from "../../model/user";
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

      let coupons = await Coupon.find(criteria);
      return res.status(200).json({ success: true, data: coupons });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
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
          payload,
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
      let token: any = req.headers.authorization;
      let vefied_token: any = VerifyJWTToken(token.split("Bearer ")[1]);
      let user: any = await User.findOne({ _id: vefied_token._id });

      let coupon = await Coupon.findOne({ coupon_code: req.body.coupon_code });
      if (coupon && coupon.can_use_for > 0) {
        if (coupon.organization) {
          let subscription = await Subscription.findOne({
            _id: coupon.subscription,
          });

          let payload = {
            subscription: coupon.subscription,
            organization: coupon.organization,
            coupon_code: coupon.coupon_code,
            quantity: 1,
            user: user._id,
            subscription_created_date: moment().toISOString(),
            subscription_end_date: moment()
              .add(subscription.duration, "months")
              .toISOString(),
          };

          let organization_subscription =
            await UserSubscription.findOneAndUpdate(
              { user: user._id },
              payload,
              {
                upsert: true,
                new: true,
              }
            );
          await User.findOneAndUpdate(
            { _id: user._id },
            { organization_subscription: organization_subscription },
            { upsert: true, new: true }
          );
        } else {
          coupon = await Coupon.findOneAndUpdate(
            { coupon_code: req.body.coupon_code },
            { $inc: { can_use_for: -1 } },
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
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default CouponController;
