import express from "express";
import { Auth } from "../controller";
import { validate } from "../middlewares/validations";
import { register, login, verifyOtp } from "../middlewares/schema/auth";
const router = express.Router();

router.post("/register", [validate(register)], Auth.register, Auth.generateOtp);
router.post("/login", [validate(login)], Auth.login, Auth.generateOtp);
router.post("/resend-otp", [validate(login)], Auth.resendOtp,Auth.generateOtp);
router.post("/verify-otp", [validate(verifyOtp)], Auth.verifyOtp);
router.post("/refresh-token",  Auth.refreshToken);

export const AuthRoutes = router;
