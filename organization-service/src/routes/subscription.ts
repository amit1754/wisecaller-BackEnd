import { Router } from "express";
import { Subscription } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", Subscription.index);
router.post("/update", [authorization], Subscription.onUpdateSubscription);


export const SubscriptionRoutes = router;
