import { Request, Response } from "express";
import { User } from "../../models/user";
import { UserSubscription } from "../../models/user_subscription";

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
        populate: {
          path: "organization_subscription.subscription",
        },
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
          "modes.syncCalender.is_active": req.body.calender_sync,
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

      let users =
        req.body.page || req.body.limit
          ? await User.paginate(criteria, options)
          : await User.find(criteria);
      return res.status(200).json({ success: true, data: users });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default UserController;
