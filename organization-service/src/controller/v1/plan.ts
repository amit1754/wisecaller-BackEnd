import { Request, Response } from "express";
import { Coupon } from "../../models/coupon";
import { User } from "../../models/user";

class PlanController {
  async revokeOrganizationEmployeePlan(req: Request, res: Response) {
    try {
      await User.findOneAndUpdate(
        { _id: req.body.employee },
        { organization_subscription: null },
        { upsert: true, new: true }
      );

      await Coupon.findOneAndUpdate(
        { coupon_code: req.body.coupon },
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
