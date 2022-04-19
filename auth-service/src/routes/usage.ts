import { authorization } from "@wisecaller/authorizer";
import express from "express";
import { Usage } from "../controller";

const router = express.Router();

router.get("/", [authorization], Usage.update);

export const UsageRoutes = router;
