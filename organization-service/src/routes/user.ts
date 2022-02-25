import { Router } from "express";
import { User } from "../controller";
import { authorization } from "../middlewares/authorization";

const router = Router();

router.post("/", [authorization], User.index);

export const UserRoutes = router;
