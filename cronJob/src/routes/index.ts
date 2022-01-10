import express from "express";
import {removeHistoryRoutes} from "./callHistory";
import {statusRoutes} from "./customstatus";
const router = express.Router();
router.use("/remove_history", removeHistoryRoutes);
router.use("/remove_status", statusRoutes);
export default router;
