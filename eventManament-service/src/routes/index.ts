import express from "express";

import { EventRoutes } from './status'
const router = express.Router();


router.use("/event", EventRoutes);

export default router;
