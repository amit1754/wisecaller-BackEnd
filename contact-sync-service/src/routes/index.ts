import express from "express";

import { SyncRoutes } from "./contactSync";
import { calanderSyncRoutes } from "./calenderSync";
const router = express.Router();



router.use("/contact", SyncRoutes);
router.use("/calender", calanderSyncRoutes);

export default router;
