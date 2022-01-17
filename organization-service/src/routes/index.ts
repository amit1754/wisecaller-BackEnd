import { Router } from "express";
import { AuthRoutes } from "./auth";
import { OrganazationRoutes } from "./organization";
import { authorization } from "@wisecaller/authorizer";
const router = Router();

router.use("/auth", AuthRoutes);
router.use("/organization", authorization, OrganazationRoutes);


export default router;