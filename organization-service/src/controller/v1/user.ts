import { Request, Response } from "express";
import { Subscription } from "../../models/subscription";
import { User } from "../../models/user";
import { UserSubscription } from "../../models/user_subscription";
import { Parser } from "json2csv";
import { CustomStatus } from "../../models/custom-status";
import moment from "moment";
import RazorPay from "razorpay";
import { Payment } from "../../models/payment";

class UserController {
  async index(req: Request, res: Response) {
    try {
      let sort_key: any = req.body.sort_key || "first_name";
      let sort_direction: any =
        req.body.sort_direction && req.body.sort_direction === "DESC" ? -1 : 1;
      let loggedInUser: any = req.body.user;
      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
      };

      let criteria = {
        // isActive: true,
      };

      if (loggedInUser?.role === "ORGANIZATION") {
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
          "active_subscriptions.subscription": req.body.subscription,
        });
      }

      if (req.body.coupon_code) {
        Object.assign(criteria, {
          "active_subscriptions.coupon_code": req.body.coupon_code,
        });
      }

      if (req.body.road_safety) {
        Object.assign(criteria, {
          "modes.roadSafety.is_active": req.body.road_safety,
        });
      }

      if (req.body.calender_sync) {
        Object.assign(criteria, {
          "modes.syncCalender.calenders": { $ne: null },
        });
      }

      if (req.body.work_life_balance) {
        Object.assign(criteria, {
          "modes.workLifeBalance.is_active": req.body.work_life_balance,
        });
      }

      if (req.body.custom_status) {
        let custom_statuses = await CustomStatus.find({});
        let users = custom_statuses.map((item: any) => item.user);
        Object.assign(criteria, { _id: { $in: users } });
      }

      if (req.body.registered_date) {
        Object.assign(criteria, {
          createdAt: {
            $gte: req.body.registered_date[0],
            $lte: req.body.registered_date[1],
          },
        });
      }

      if (req.body.subscribed_date) {
        Object.assign(criteria, {
          "active_subscriptions.subscription_created_date": {
            $gte: req.body.subscribed_date[0],
            $lte: req.body.subscribed_date[1],
          },
        });
      }

      if (req.body.organization) {
        Object.assign(criteria, {
          "active_subscriptions.organization": req.body.organization,
        });
      }

      if (req.body.is_active) {
        Object.assign(criteria, {
          isActive: Boolean(req.body.is_active),
        });
      }

      let users =
        req.body.page || req.body.limit
          ? await User.paginate(criteria, options)
          : await User.find(criteria);
      return res.status(200).json({ success: true, data: users });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async exportCSV(req: Request, res: Response) {
    try {
      let criteria = {};
      let loggedInUser: any = req.body.user;

      let subscription_criteria = {};

      if (loggedInUser?.role === "ORGANIZATION") {
        let subscriptions = await UserSubscription.find(
          {
            organization: loggedInUser._id,
          },
          { user: 1, organization: 1 }
        );

        subscriptions = subscriptions.map((item: any) => item.user);

        Object.assign(criteria, {
          _id: { $in: subscriptions },
          "active_subscriptions.organization": loggedInUser._id,
        });

        Object.assign(subscription_criteria, {
          type: "ORGANIZATION",
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
          "active_subscriptions.subscription": req.body.subscription,
        });
      }

      if (req.body.coupon_code) {
        Object.assign(criteria, {
          "active_subscriptions.coupon_code": req.body.coupon_code,
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

      if (req.body.custom_status) {
        let custom_statuses = await CustomStatus.find({});
        let users = custom_statuses.map((item: any) => item.user);
        Object.assign(criteria, { _id: { $in: users } });
      }

      if (req.body.registered_date) {
        Object.assign(criteria, {
          createdAt: req.body.registered_date,
        });
      }

      if (req.body.subscribed_date) {
        Object.assign(criteria, {
          "active_subscriptions.subscription_created_date":
            req.body.subscription_created_date,
        });
      }

      let subscriptions: any = await Subscription.find(subscription_criteria);
      let users = await User.find(criteria);
      let csv_data = [];
      for (const user of users) {
        let temp: any = user;
        let payload = {
          first_name: temp.first_name,
          last_name: temp.last_name,
          phone_no: temp.phone,
          email: temp?.email ? temp.email : "",
          registered_date: temp.createdAt,
          work_life_balance: temp?.modes?.workLifeBalance?.is_active
            ? "Active"
            : "Inactive",
          road_safety: temp?.modes?.roadSafety?.is_active
            ? "Active"
            : "Inactive",
          calendar_sync: temp?.modes?.syncCalender?.is_active
            ? "Active"
            : "Inactive",
          status: temp.isActive ? "Active" : "Inactive",
        };
        csv_data.push(payload);
      }

      let fields = [
        {
          label: "FIRST NAME",
          value: "first_name",
          default: "",
        },
        {
          label: "LAST NAME",
          value: "last_name",
          default: "",
        },
        {
          label: "PHONE NUMBER",
          value: "phone_no",
          default: "",
        },
        {
          label: "EMAIL",
          value: "email",
          default: "",
        },
        {
          label: "PLAN",
          value: "plan",
          default: "",
        },
        {
          label: "REDEEM COUPON",
          value: "redeem_coupon",
          default: "",
        },
        {
          label: "REGISTERED DATE",
          value: "registered_date",
          default: "",
        },
        {
          label: "SUBSCRIBED DATE",
          value: "subscribed_date",
          default: "",
        },
        {
          label: "WORK LIFE BALANCE",
          value: "work_life_balance",
          default: "",
        },
        {
          label: "ROAD SAFETY",
          value: "road_safety",
          default: "",
        },
        {
          label: "CALENDAR SYNC",
          value: "calendar_sync",
          default: "",
        },
        {
          label: "STATUS",
          value: "status",
          default: "",
        },
      ];

      let parser = new Parser({ fields: fields });
      let parsed_data = parser.parse(csv_data);
      return res.status(200).json({ success: true, data: parsed_data });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async deactivateUser(req: Request, res: Response) {
    try {
      await User.findOneAndUpdate(
        { _id: req.body.user_id },
        { isActive: false, deactivate_reason: req.body.deactivate_reason },
        { upsert: true, new: true }
      );
      return res
        .status(200)
        .json({ success: true, message: "User deactivated" });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async changeUserPlan(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      let user: any = await User.findOne({ _id: payload.user_id });
      let active_subscriptions = user.active_subscriptions;
      if (user) {
        let subscription: any = await Subscription.findOne({
          _id: payload.subscription,
        });

        let free_subscription: any = await Subscription.findOne({
          type: "FREE",
        });

        //remove free subscription
        let index = active_subscriptions.findIndex(
          (item: any) =>
            item.subscription.toString() === free_subscription._id.toString()
        );

        active_subscriptions.splice(index, 1);

        const instance = new RazorPay({
          key_id: process.env.RAZORPAYKEY,
          key_secret: process.env.RAZORPAYSECRET,
        });

        let options = {
          amount: subscription.current_price
            ? subscription.current_price * 100
            : subscription.original_price * 100,
          currency: "INR",
          receipt: moment().toISOString(),
        };

        let order: any = await instance.orders.create(options);

        let user_subscription_payload: any = {
          subscription: subscription._id,
          quantity: 1,
          user: user._id,
          subscription_created_date: moment().toISOString(),
          subscription_end_date: moment()
            .add(subscription.duration, "months")
            .toISOString(),
          is_active: true,
          user_subscription_date: moment().toISOString(),
        };

        let user_subscription: any = new UserSubscription(
          user_subscription_payload
        );
        await user_subscription.save();

        active_subscriptions.map((item: any) => {
          if (
            item.subscription.toString() === payload.subscription.toString()
          ) {
            item.subscription_created_date =
              user_subscription.subscription_created_date;
            item.subscription_end_date =
              user_subscription.subscription_end_date;
          }
        });

        if (!active_subscriptions.length) {
          active_subscriptions.push(user_subscription);
        }

        await User.findOneAndUpdate(
          { _id: payload.user_id },
          { active_subscriptions: active_subscriptions },
          { upsert: true, new: true }
        );

        let payment_payload = {
          transactionId: order.id,
          subscription: subscription._id,
          user_subscription: user_subscription._id,
          amount: order?.amount / 100,
          paymentFor: "Change Subscription",
          status: "SUCCESS",
          mode: "ONLINE",
          user: user._id,
          payment_date: moment().toISOString(),
        };

        await Payment.findOneAndUpdate(
          { user: user._id, transactionId: payment_payload.transactionId },
          payment_payload,
          { upsert: true, new: true }
        );

        return res
          .status(200)
          .json({ success: true, message: "User plan changed" });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "User not found" });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default UserController;
