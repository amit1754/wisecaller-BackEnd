import express from "express";

import { AuthRoutes } from "./auth";
import { UserRoutes } from "./user";
import { ContactusRoutes } from "./contactus"

import {authorization} from '../middlewares'


const router = express.Router();


router.use("/auth", AuthRoutes);
router.use("/user", [authorization], UserRoutes);
router.use("/contact-us", ContactusRoutes);

export default router;
