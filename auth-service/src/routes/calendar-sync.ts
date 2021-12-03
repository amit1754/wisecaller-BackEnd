import express from "express";
import { CalenderSync } from "../controller";

const router = express.Router();

router.post("/", CalenderSync.add);

export const CalenfarSyncRoutes = router;
