import express from "express";

import passport from "passport";
import { CallHistorotRoutes } from './call';
const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.use("/callhistory", CallHistorotRoutes);

export default router;
