import express from "express";
import { Pages } from "../controller";
const router = express.Router();

router.get("/", Pages.index);
router.post("/update", Pages.update);

export const PagesRoutes = router;
