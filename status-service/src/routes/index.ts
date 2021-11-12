import express from "express";

import { EventRoutes } from './status'
import{CustomStatusRoutes} from './customStatus'
const router = express.Router();


router.use("/event", EventRoutes);
router.use("/custom-status", CustomStatusRoutes);

export default router;
