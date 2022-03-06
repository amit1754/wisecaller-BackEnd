import { Router } from "express";
import { AuthRoutes } from "./auth";
import { CouponRoutes } from "./coupon";
import { OrganazationRoutes } from "./organization";
import { SubscriptionRoutes } from "./subscription";
import { NotesRoutes } from "./notes";
import { StatusRoutes } from "./status";
import { UserRoutes } from "./user";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/organization", OrganazationRoutes);
router.use("/user", UserRoutes);
router.use("/coupon", CouponRoutes);
router.use("/subscription", SubscriptionRoutes);
router.use("/notes", NotesRoutes);
router.use("/status", StatusRoutes);
export default router;
