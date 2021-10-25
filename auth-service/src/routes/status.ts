import express from "express";
import { Auth } from "../controller";
const router = express.Router();

router.post("/add", Auth.register, Auth.generateOtp);

export const AuthRoutes = router;
