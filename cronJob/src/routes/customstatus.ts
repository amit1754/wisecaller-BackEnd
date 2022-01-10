import express from "express";
import { updateStatusController } from "../controller";
const router = express.Router();
router.post("/", updateStatusController.removeStatus);
export const statusRoutes = router;
