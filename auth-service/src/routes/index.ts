import express from "express";

import { AuthRoutes } from "./auth";
import { UserRoutes } from "./user";
import { ContactusRoutes } from "./contactus"
import passport from "passport";
const auth = passport.authenticate("jwt", { session: false });

const router = express.Router();


router.use("/auth", AuthRoutes);
router.use("/user", [auth], UserRoutes);
router.use("/contact-us", ContactusRoutes);

export default router;
