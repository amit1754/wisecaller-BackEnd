import { Request, Response } from "express";
import moment from "moment";
import { Coupon } from "../../models/coupon";

class CouponController {
  async index(req: Request, res: Response) {
    try {
      let sort_key: any = req.body.sort_key || "coupon_code";
      let sort_direction: any =
        req.body.sort_direction && req.body.sort_direction === "DESC" ? -1 : 1;

      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
        populate: {
          path: "subscription",
        },
      };

      let criteria = {};

      if (req.body?.role === "ORGANIZATION") {
        Object.assign(criteria, { organization: req.body.user._id });
      }

      if (req.body.search) {
        Object.assign(criteria, {
          coupon_code: { $regex: req.body.search, $options: "i" },
        });
      }

      if (req.body.subscription) {
        Object.assign(criteria, {
          subscription: req.body.subscription,
        });
      }

      if (req.body.generated_date) {
        Object.assign(criteria, {
          generated_date: {
            $gt: moment(req.body.generated_date)
              .startOf("day")
              .utc(false)
              .toISOString(),
            $lt: moment(req.body.generated_date)
              .endOf("day")
              .utc(false)
              .toISOString(),
          },
        });
      }

      let coupons =
        req.body.page || req.body.limit
          ? await Coupon.paginate(criteria, options)
          : await Coupon.find(criteria);
      return res.status(200).json({ success: true, data: coupons });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default CouponController;
