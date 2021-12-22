import { Router } from "express";
import { Subscription } from "../controller";

const router = Router();

router.get("/", Subscription.index);
router.post("/update", Subscription.update);

export const SubscriptionRoutes = router;
