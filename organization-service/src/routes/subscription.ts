import { Router } from "express";
import { Subscription } from "../controller";

const router = Router();

router.post("/", Subscription.index);

export const SubscriptionRoutes = router;
