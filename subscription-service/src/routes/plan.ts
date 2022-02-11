import { Router } from "express";
import { Plan } from "../controller";
import { authorization } from "@wisecaller/authorizer";

const router = Router();

router.get("/", Plan.index);
router.put("/update", Plan.update);

export const PlanRoutes = router;
