import express from "express";
import { Auth } from "../controller";
import { validate } from "../middlewares/validations";
import { register, login, verifyOtp } from "../middlewares/schema/auth";
import { authorization } from "../middlewares";
const router = express.Router();

router.post("/register", [validate(register)], Auth.register, Auth.generateOtp);
router.post("/login", [validate(login)], Auth.login, Auth.generateOtp);

router.post("/resend-otp", [validate(login)], Auth.resendOtp, Auth.generateOtp);
router.post("/verify-otp", [validate(verifyOtp)], Auth.verifyOtp);
router.post("/refresh-token", authorization, Auth.refreshToken);

export const AuthRoutes = router;
