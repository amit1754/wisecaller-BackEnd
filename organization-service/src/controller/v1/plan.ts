import { Request, Response } from "express";
import { Coupon } from "../../models/coupon";
import { Plan } from "../../models/plan";
import { User } from "../../models/user";

class PlanController {
  async index(req: Request, res: Response) {
    try {
      let sort_key: any = req.body.sort_key || "name";
      let sort_direction: any =
        req.body.sort_direction && req.body.sort_direction === "DESC" ? -1 : 1;

      let criteria = {};
      let payload: any = {
        ...req.body,
      };
      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
        populate: {
          path: "subscription",
        },
      };

      if (payload.subscription) {
        Object.assign(criteria, { subscription: payload.subscription });
      }

      let plans =
        req.body.page || req.body.limit
          ? await Plan.paginate(criteria, options)
          : await Plan.find(criteria);
      return res.status(200).json({ success: true, data: plans });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      let plan: any = {};
      let selected_id = payload._id;

      if (payload?.isDeleted) {
        await Plan.findOneAndDelete({ name: payload.name });
      } else if (payload?._id) {
        plan = await Plan.findOneAndUpdate({ _id: selected_id }, payload, {
          upsert: true,
          new: true,
        });
      } else {
        plan = new Plan(payload);
        plan.save();
      }
      return res.status(200).json({ success: true, data: plan });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async revokeOrganizationEmployeePlan(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      delete payload.user;

      let active_subscriptions = payload.active_subscriptions;

      let index = active_subscriptions.findIndex(
        (item: any) =>
          item.subscription === payload.subscription &&
          item.coupon_code === payload.coupon_code
      );

      active_subscriptions.splice(index, 1);

      await User.findOneAndUpdate(
        { _id: req.body.employee },
        { active_subscriptions: active_subscriptions },
        { upsert: true, new: true }
      );

      await Coupon.findOneAndUpdate(
        { coupon_code: payload.coupon_code },
        { $inc: { used_subscription: -1, can_use_for: 1 } },
        { upsert: true, new: true }
      );
      return res
        .status(200)
        .json({ success: true, message: "Employee plan revoked" });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default PlanController;
