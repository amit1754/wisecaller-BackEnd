import { Router } from "express";
import { Subscription } from "../controller";

const router = Router();

router.get("/", Subscription.index);
router.post("/update", Subscription.update);
router.post(
  "/organization-subscription",
  Subscription.organizationSubscription
);

export const SubscriptionRoutes = router;
