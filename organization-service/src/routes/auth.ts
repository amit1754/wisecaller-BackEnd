import { Router } from "express";
import { Auth } from "../controller";
const router = Router();

router.post("/register", Auth.create);
router.post("/login", Auth.login, Auth.generateOtp);
router.post("/verify", Auth.verifyOtp);

export const AuthRoutes = router;
