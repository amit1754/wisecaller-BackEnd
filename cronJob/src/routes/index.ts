import express from "express";
import {removeHistoryRoutes} from "./callHistory";
const router = express.Router();
router.use("/remove_history", removeHistoryRoutes);
export default router;
