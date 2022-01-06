import { Request, Response } from "express";
import { getUserBll} from "@wisecaller/user-service";
import VerifyJWTToken from "../../utils/verify-jwt";
import RazorPay from "razorpay";
import moment from "moment";
import { Payment } from "../../model/payment";
import { UserSubscription } from "../../model/user_subscription";
import { Subscription } from "../../model/subscription";
import { Coupon } from "../../model/coupon";
import email from "@wisecaller/email";
class PaymentController {
  async index(req: Request, res: Response) {
    try {
      let token: any = req.headers.authorization;
      let vefied_token: any = VerifyJWTToken(token.split("Bearer ")[1]);
      let user: any = await getUserBll.findOneUser({ _id: vefied_token._id });
      let loggedInUser = req.body.user;
      let payload = {
        ...req.body,
      };

      delete payload.user;

      let subscription = await Subscription.findById(payload.subscription);
      let subscription_payload = {
        subscription: subscription._id,
        organization: subscription.organization,
        coupon_code: payload.coupon_code,
        quantity: 1,
        user: user._id,
        subscription_created_date: moment().toISOString(),
        subscription_end_date: moment()
          .add(subscription.duration, "months")
          .toISOString(),
        is_active: true,
        user_subscription_date: moment().toISOString(),
      };

      if (subscription.organization) {
        let organization_subscription = await UserSubscription.findOneAndUpdate(
          { user: user._id, organization: { $exists: true } },
          subscription_payload,
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
        let user_active_subscriptions = await UserSubscription.findOne({
          user: loggedInUser._id,
          subscription: payload.subscription,
          subscription_end_date: { $gte: moment().toISOString() },
          is_revoked: false,
        });
        let diff_days = moment(
          user_active_subscriptions.subscription_end_date
        ).diff(moment(), "days");
        subscription_payload.subscription_end_date = moment(
          subscription_payload.subscription_end_date
        )
          .add(diff_days, "days")
          .toISOString();
        let user_subscription = await UserSubscription.findOneAndUpdate(
          { user: user._id, organization: { $exists: false } },
          subscription_payload,
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

      let payment_payload = {
        ...req.body,
        user: user._id,
        payment_date: moment().toISOString(),
      };

      let payment = await Payment.findOneAndUpdate(
        { user: user._id, transactionId: payload.transactionId },
        payment_payload,
        { upsert: true, new: true }
      );

      return res.status(200).json({ success: true, data: payment });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async order(req: Request, res: Response) {
    try {
      const instance = new RazorPay({
        key_id: process.env.RAZORPAYKEY,
        key_secret: process.env.RAZORPAYSECRET,
      });

      let options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: moment().toISOString(),
      };

      let order = await instance.orders.create(options);
      return res.status(200).json({ success: true, data: order });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async paymentForOrganization(req: Request, res: Response) {
    try {
      let loggedInUser = req.body.user;
      let payload = {
        ...req.body,
      };
      delete payload.user;

      let coupon_payload = {
        coupon_code: payload.coupon_code,
        can_use_for: payload.quantity,
        organization: loggedInUser._id,
        subscription: payload.subscription,
        type: "ORGANIZATION",
        expires_at: payload.coupon_expiry_date,
      };

      let payment_payload = {
        ...req.body,
        user: loggedInUser._id,
        payment_date: moment().toISOString(),
      };

      let payment = await Payment.findOneAndUpdate(
        { user: loggedInUser._id, transactionId: payload.transactionId },
        payment_payload,
        { upsert: true, new: true }
      );

      await Coupon.findOneAndUpdate(
        { coupon_code: payload.coupon_code },
        coupon_payload,
        { upsert: true, new: true }
      );

      let mail_body = `<h3>COUPON CODE:  ${payload.coupon_code}`;
      await email.Send(loggedInUser.email, "Organization Coupon", mail_body);
      return res.status(200).json({ success: true, data: payment });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default PaymentController;
