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
router.post("/export-csv", [authorization], Coupon.exportCSV);
router.post("/update", [authorization], Coupon.update);

export const CouponRoutes = router;
