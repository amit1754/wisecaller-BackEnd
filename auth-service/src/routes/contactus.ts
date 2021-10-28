import express from "express";
import { User } from "../controller";
import passport from "passport";
import {authorization} from '../middlewares'
const router = express.Router();
// const auth = passport.authenticate("jwt", { session: false });


router.post("/", User.contactUs);
router.get("/get", [authorization] ,User.getcontactUs);
export const ContactusRoutes = router;
