import express from "express";
import { User } from "../controller";
import passport from "passport";
const router = express.Router();
const auth = passport.authenticate("jwt", { session: false });

router.post("/", User.contactUs);
router.get("/get", [auth] ,User.getcontactUs);
export const ContactusRoutes = router;
