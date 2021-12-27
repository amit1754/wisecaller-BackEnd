import { Router } from "express";
import { Auth } from "../controller";
const router = Router();

router.post("/register", Auth.create);

export const AuthRoutes = router;
