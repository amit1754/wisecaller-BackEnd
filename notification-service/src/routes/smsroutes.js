import express from "express";
import { smsController } from "../controller";
import {} from "../middlewares/jwt";
const router = express.Router();

router.post("/send", smsController.sendSMS);

export const SmsRoutes = router;
