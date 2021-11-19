import express from "express";

import { EventRoutes } from "./status";
import { CustomStatusRoutes } from "./customStatus";
import { globalTypesRoutes } from "./globalTypes";
import { generalStatusRoutes } from "./generalStatus";
import { NotesRoutes } from "./notes";
import { authorization } from "../middlewares";
const router = express.Router();

router.use("/event", EventRoutes);
router.use("/custom-status", CustomStatusRoutes);
router.use("/global-type", globalTypesRoutes);
router.use("/general-status", generalStatusRoutes);
router.use("/notes", [authorization], NotesRoutes);

export default router;
