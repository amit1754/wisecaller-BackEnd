import express from "express";
import { GlobalTypes } from "../controller";
const router = express.Router();

router.post("/", GlobalTypes.index);
router.post("/update", GlobalTypes.update);

export const GlobalRoutes = router;
