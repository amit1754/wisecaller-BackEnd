import express from "express";
import { WorkLifeBalance } from "../controller";

const router = express.Router();

router.post("/", WorkLifeBalance.update);

export const WorkLifeBalanceRoutes = router;
