import { Router } from "express";
import { Coupon } from "../controller";
import { authorization } from "../middlewares";

const router = Router();

router.get("/", Coupon.index);
router.post("/update", Coupon.update);
router.post("/bulk-coupon-create", Coupon.bulkCouponCreation);
router.post("/redeem-coupon", [authorization], Coupon.redeemCouponCode);

export const CouponRoutes = router;
