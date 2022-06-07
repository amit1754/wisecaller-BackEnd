import express from "express";
import { Template } from "../controller";
import { upload } from "../utils";
const router = express.Router();

router.get("/", Template.index);
router.post("/update", [upload.single("image")], Template.update);

export const TemplatesRoutes = router;
