import { Request, Response } from "express";
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
      };

      let criteria = {};

      if (req.body.role === "ORGANIZATION") {
        Object.assign(criteria, { organization: req.body.user._id });
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
