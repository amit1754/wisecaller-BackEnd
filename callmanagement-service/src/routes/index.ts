import express from "express";

import { authenticate } from "passport";
import { CallHistorotRoutes } from './call';
const router = express.Router();

const auth = authenticate("jwt", { session: false });

router.use("/callhistory", CallHistorotRoutes);

export default router;
