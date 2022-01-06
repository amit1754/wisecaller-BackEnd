import express from "express";
import { workLifeRoutes } from './workLifeRoutes'
import { authorization } from "@wisecaller/authorizer";
const router = express.Router();



router.use("/work-life", [authorization], workLifeRoutes);
export default router;
