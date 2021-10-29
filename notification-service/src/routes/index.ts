import express from "express";


import { SmsRoutes } from './smsroutes'

const router = express.Router();


router.use("/sms", SmsRoutes);

export default router;
