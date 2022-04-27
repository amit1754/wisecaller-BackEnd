import { authorization } from "@wisecaller/authorizer";
import { Router } from "express";
import { UserSubscription } from "../controller";

const router = Router();

router.get("/", [authorization], UserSubscription.index);
router.post("/update", [authorization], UserSubscription.update);
router.post("/revoke", [authorization], UserSubscription.revoke);

export const UserSubscriptionRoutes = router;
