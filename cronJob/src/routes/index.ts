import express from "express";
import {removeHistoryRoutes} from "./callHistory";
import {statusRoutes} from "./customstatus";
import {subscriptionRoutes} from "./subscription";
const router = express.Router();
router.use("/remove_history", removeHistoryRoutes);
router.use("/remove_status", statusRoutes);
router.use("/subscription-end", subscriptionRoutes);
export default router;
