import { Router } from "express";
import { Coupon } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", [authorization], Coupon.index);
router.get(
  "/deactivate-coupon/:coupon",
  [authorization],
  Coupon.deactivateCoupon
);

export const CouponRoutes = router;
