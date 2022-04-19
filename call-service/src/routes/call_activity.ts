import { authorization } from "@wisecaller/authorizer";
import express from "express";
import { CallActivity } from "../controller";

const router = express.Router();

router.post("/", [authorization], CallActivity.update);

export const CallActivityRoutes = router;
