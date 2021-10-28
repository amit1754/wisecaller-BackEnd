import express from "express";
import { CallHistorotRoutes } from './call';
const router = express.Router();
router.use("/callhistory", CallHistorotRoutes);

export default router;
