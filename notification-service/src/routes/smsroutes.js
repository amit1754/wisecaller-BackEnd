import express from "express";
import { smsController } from "../controller";

const router = express.Router();

router.post("/send", smsController.sendSMS);

export const SmsRoutes = router;
