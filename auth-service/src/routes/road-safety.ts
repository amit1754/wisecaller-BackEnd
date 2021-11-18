import express from "express";
import { RoadSafety } from "../controller";

const router = express.Router();

router.post("/", RoadSafety.update);

export const RoadSafetyRoutes = router;
