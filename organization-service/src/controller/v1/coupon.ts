import { Request, Response } from "express";
import moment from "moment";
import { Coupon } from "../../models/coupon";
import { User } from "../../models/user";
import { Parser } from "json2csv";

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

  async deactivateCoupon(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.body.user;
      let coupon: any = await Coupon.findOne({ _id: req.params.coupon });
      await User.findOneAndUpdate(
        {
          organization_subscription: { $exists: true, $ne: null },
          "organization_subscription.organization": loggedInUser._id,
          "organization_subscription.coupon_code": coupon?.coupon_code,
        },
        { organization_subscription: null },
        { upsert: true, new: true }
      );
      await Coupon.findOneAndDelete({ _id: req.params.coupon });
      return res
        .status(200)
        .json({ success: true, message: "Coupon deactivated" });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async exportCSV(req: Request, res: Response) {
    try {
      let criteria = {};
      let loggedInUser: any = req.body.user;

      if (loggedInUser?.role === "ORGANIZATION") {
        Object.assign(criteria, { organization: loggedInUser._id });
      }

      let coupons = await Coupon.find(criteria).populate({
        path: "subscription",
      });

      let csv_data = [];
      for (const coupon of coupons) {
        let temp: any = coupon;
        let payload = {
          code: temp.coupon_code,
          expires_at: temp.expires_at,
          plan: temp?.subscription?.title,
          total_slots: temp.can_use_for,
          used_subscription: temp.used_subscription,
          open_slots: temp?.can_use_for - temp?.used_subscription,
          generated_date: temp.createdAt,
          original_price: temp?.subscription?.original_price,
          paid_price: temp?.subscription?.current_price,
          gst: temp?.subscription?.gst_percentage,
          cess: temp?.subscription?.cess_percentage,
        };

        csv_data.push(payload);
      }

      const fields = [
        {
          label: "CODE",
          value: "code",
          default: "",
        },
        {
          label: "EXPIRES AT",
          value: "expires_at",
          default: "",
        },
        {
          label: "PLAN",
          value: "plan",
          default: "",
        },
        {
          label: "TOTAL SLOTS",
          value: "total_slots",
          default: "0",
        },
        {
          label: "USED SUBSCRIPTION",
          value: "used_subscription",
          default: "0",
        },
        {
          label: "OPEN SLOTS",
          value: "open_slots",
          default: "0",
        },
        {
          label: "GENERATED DATE",
          value: "generated_date",
          default: "",
        },
        {
          label: "ORIGINAL PRICE",
          value: "original_price",
          default: "",
        },
        {
          label: "PAID PRICE",
          value: "paid_price",
          default: "",
        },
        {
          label: "GST",
          value: "gst",
          default: "0",
        },
        {
          label: "CESS",
          value: "cess",
          default: "0",
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

export default CouponController;
