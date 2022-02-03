import express from "express";
import { subscriptionController } from "../controller";
const router = express.Router();
router.post("/", subscriptionController.NotifyUser);
export const subscriptionRoutes = router;
