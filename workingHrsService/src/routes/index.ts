import express from "express";
import { workLifeRoutes } from './workLifeRoutes'
import { authorization } from "../middlewares";
const router = express.Router();



router.use("/work-life", [authorization], workLifeRoutes);
export default router;
