import express from "express";
import { contactSync_Controller } from "../controller";
const router = express.Router();
import passport from 'passport'
const auth: any = passport.authenticate("jwt", { session: false });

router.post("/sync", [auth,], contactSync_Controller.add);
router.get("/get", [auth], contactSync_Controller.getAll);

export const SyncRoutes = router;
