import { Router } from "express";
import { UserSubscription } from "../controller";

const router = Router();

router.get("/", UserSubscription.index);
router.post("/update", UserSubscription.update);
router.post("/revoke", UserSubscription.revoke);

export const UserSubscriptionRoutes = router;
