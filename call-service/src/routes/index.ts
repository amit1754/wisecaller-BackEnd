import express from "express";
import { CallHistorotRoutes } from "./call";
import { CallActivityRoutes } from "./call_activity";
const router = express.Router();

router.use("/callhistory", CallHistorotRoutes);
router.use("/call-activity", CallActivityRoutes);

export default router;
