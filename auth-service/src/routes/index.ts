import express from "express";

import { AuthRoutes } from "./auth";
import { UserRoutes } from "./user";
import { ContactusRoutes } from "./contactus";

import { authorization } from "@wisecaller/authorizer";
import { RoadSafetyRoutes } from "./road-safety";
import { CalenfarSyncRoutes } from "./calendar-sync";
import { WorkLifeBalanceRoutes } from "./work-life-balance";

const router = express.Router();

router.use("/auth", AuthRoutes);
router.use("/user", [authorization], UserRoutes);
router.use("/contact-us", ContactusRoutes);
router.use("/road-safety", [authorization], RoadSafetyRoutes);
router.use("/calendar-sync", [authorization], CalenfarSyncRoutes);
router.use("/work-life-balance", [authorization], WorkLifeBalanceRoutes);

export default router;
