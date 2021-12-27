import { Request, Response } from "express";
import { User } from "../../model/user";
import VerifyJWTToken from "../../utils/verify-jwt";
import RazorPay from "razorpay";
import moment from "moment";
import { Payment } from "../../model/payment";
import { UserSubscription } from "../../model/user_subscription";
import { Subscription } from "../../model/subscription";
class PaymentController {
  async index(req: Request, res: Response) {
    try {
      let token: any = req.headers.authorization;
      let vefied_token: any = VerifyJWTToken(token.split("Bearer ")[1]);
      let user: any = await User.findOne({ _id: vefied_token._id });

      let payload = {
        ...req.body,
      };

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
        await User.findOneAndUpdate(
          { _id: user._id },
          { organization_subscription: organization_subscription },
          { upsert: true, new: true }
        );
      } else {
        let user_subscription = await UserSubscription.findOneAndUpdate(
          { user: user._id, organization: { $exists: false } },
          subscription_payload,
          {
            upsert: true,
            new: true,
          }
        );
        await User.findOneAndUpdate(
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
}

export default PaymentController;
