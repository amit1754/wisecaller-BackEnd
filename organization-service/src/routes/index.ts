import { Router } from "express";
import { AuthRoutes } from "./auth";
import { CouponRoutes } from "./coupon";
import { OrganazationRoutes } from "./organization";
import { PagesRoutes } from "./pages";
import { PlanRoutes } from "./plan";
import { SubscriptionRoutes } from "./subscription";
import { UserRoutes } from "./user";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/organization", OrganazationRoutes);
router.use("/user", UserRoutes);
router.use("/coupon", CouponRoutes);
router.use("/subscription", SubscriptionRoutes);
router.use("/plan", PlanRoutes);
router.use("/pages", PagesRoutes);

export default router;
