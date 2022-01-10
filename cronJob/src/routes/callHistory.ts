import express from "express";
import { callHistoryController } from "../controller";
const router = express.Router();
router.post("/", callHistoryController.removeHistory);
export const removeHistoryRoutes = router;
