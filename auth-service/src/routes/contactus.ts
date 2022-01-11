import express from "express";
import { User } from "../controller";
import { authorization } from "@wisecaller/authorizer";
const router = express.Router();

router.post("/", User.contactUs);
router.get("/get", [authorization], User.getcontactUs);
export const ContactusRoutes = router;
