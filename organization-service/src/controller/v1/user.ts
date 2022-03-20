import { Request, Response } from "express";
import { Subscription } from "../../models/subscription";
import { User } from "../../models/user";
import { UserSubscription } from "../../models/user_subscription";
import { Parser } from "json2csv";
import { CustomStatus } from "../../models/custom-status";

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

      let criteria = {};

      if (req.body.role === "ORGANIZATION") {
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
          "organization_subscription.subscription_created_date":
            req.body.subscription_created_date,
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
          organization_subscription: { $exists: true, $ne: null },
          "organization_subscription.organization": loggedInUser._id,
          "organization_subscription.is_revoked": false,
        });

        Object.assign(subscription_criteria, {
          type: "ORGANIZATION",
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
          plan: temp?.organization_subscription?.subscription
            ? subscriptions.find(
                (item: any) =>
                  String(item._id) ==
                  String(temp?.organization_subscription?.subscription)
              ).title
            : "",
          redeem_coupon: temp.organization_subscription?.coupon_code
            ? temp.organization_subscription.coupon_code
            : "",
          registered_date: temp.createdAt,
          subscribed_date: temp.organization_subscription
            ?.subscription_created_date
            ? temp.organization_subscription.subscription_created_date
            : "",
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
}

export default UserController;
