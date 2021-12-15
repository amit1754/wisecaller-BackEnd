import express from "express";

import { SmsRoutes } from "./smsroutes";
import { MessageRoutes } from "./message";

const router = express.Router();

router.use("/sms", SmsRoutes);
router.use("/notification", MessageRoutes);

export default router;
