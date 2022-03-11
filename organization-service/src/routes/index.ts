import { Router } from "express";
import { AuthRoutes } from "./auth";
import { CouponRoutes } from "./coupon";
import { OrganazationRoutes } from "./organization";
import { PagesRoutes } from "./pages";
import { PlanRoutes } from "./plan";
import { SubscriptionRoutes } from "./subscription";
import { NotesRoutes } from "./notes";
import { UserRoutes } from "./user";
import { GlobalRoutes } from "./global-types";
import { UserStatusRoutes } from "./user-status";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/organization", OrganazationRoutes);
router.use("/user", UserRoutes);
router.use("/coupon", CouponRoutes);
router.use("/subscription", SubscriptionRoutes);
router.use("/notes", NotesRoutes);
router.use("/plan", PlanRoutes);
router.use("/pages", PagesRoutes);
router.use("/global-types", GlobalRoutes);
router.use("/user-status", UserStatusRoutes);
export default router;
