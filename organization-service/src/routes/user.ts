import { Router } from "express";
import { User } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", [authorization], User.index);
router.post("/export-csv", [authorization], User.exportCSV);
router.put("/deactivate", [authorization], User.deactivateUser);
router.put("/change-plan", [authorization], User.changeUserPlan);

export const UserRoutes = router;
