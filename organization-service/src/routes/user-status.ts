import { Router } from "express";
import { UserStatus } from "../controller";
const router = Router();

router.post("/", UserStatus.index);
router.post("/update", UserStatus.update);

export const UserStatusRoutes = router;
