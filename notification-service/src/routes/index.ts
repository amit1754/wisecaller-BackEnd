import express from "express";

import { authenticate } from "passport";
import { SmsRoutes } from './smsroutes'

const router = express.Router();

const auth = authenticate("jwt", { session: false });

router.use("/sms", SmsRoutes);

export default router;
