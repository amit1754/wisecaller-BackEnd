import { Router } from "express";
import { User } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", [authorization], User.index);
router.post("/export-csv", [authorization], User.exportCSV);

export const UserRoutes = router;
