import express from "express";

import { SyncRoutes } from "./contactSync";
const router = express.Router();



router.use("/contact", SyncRoutes);

export default router;
