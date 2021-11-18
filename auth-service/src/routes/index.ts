import express from "express";

import { AuthRoutes } from "./auth";
import { UserRoutes } from "./user";
import { ContactusRoutes } from "./contactus";

import { authorization } from "../middlewares";
import { RoadSafetyRoutes } from "./road-safety";

const router = express.Router();

router.use("/auth", AuthRoutes);
router.use("/user", [authorization], UserRoutes);
router.use("/contact-us", ContactusRoutes);
router.use("/road-safety", [authorization], RoadSafetyRoutes);

export default router;
