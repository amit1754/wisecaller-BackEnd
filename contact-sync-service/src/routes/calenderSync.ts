import express from "express";
import { calenderSync_Controller } from "../controller";
const router = express.Router();

import passport from 'passport'
const auth: any = passport.authenticate("jwt", { session: false });

router.post("/sync", [auth], calenderSync_Controller.add);
router.get("/get", [auth], calenderSync_Controller.getAll);
router.put("/update/:id", [auth], calenderSync_Controller.deleteEmail)

export const calanderSyncRoutes = router;
