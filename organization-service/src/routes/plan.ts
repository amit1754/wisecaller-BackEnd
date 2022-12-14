import { Router } from "express";
import { Plan } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", [], Plan.index);
router.post("/update", [authorization], Plan.update);
router.post(
  "/revoke-organization-employee-plan",
  [authorization],
  Plan.revokeOrganizationEmployeePlan
);

export const PlanRoutes = router;
