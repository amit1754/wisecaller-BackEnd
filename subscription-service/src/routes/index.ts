import { Router } from "express";
import { CouponRoutes } from "./coupon";
import { PaymentRoutes } from "./payment";
import { SubscriptionRoutes } from "./subscription";
import { UserSubscriptionRoutes } from "./user_subscription";
const router = Router();

router.use("/coupon", CouponRoutes);
router.use("/subscription", SubscriptionRoutes);
router.use("/user-subscription", UserSubscriptionRoutes);
router.use("/payment", PaymentRoutes);

export default router;
