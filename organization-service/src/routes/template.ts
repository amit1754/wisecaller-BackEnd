import express from "express";
import { Template } from "../controller";
import { upload } from "../utils";
const router = express.Router();

router.post("/", Template.index);
router.post("/update", [upload.single("template")], Template.update);

export const TemplatesRoutes = router;
