import express from "express";
import { status_Controller } from "../controller";
const router = express.Router();
import upload from '../middlewares/uploadService';

router.post("/add", upload.single('logo'), status_Controller.addStatus);
router.get("/get", status_Controller.getAll);
router.post("/add-sub", upload.single('logo'), status_Controller.addSubStatus);
router.delete("/delete/:id", status_Controller.delete);
router.put("/update/:id", upload.single('logo'), status_Controller.update);
router.put("/sub-update/:id", upload.single('logo'), status_Controller.updateSubStatus);
router.delete("/sub-delete/:id", status_Controller.deleteSub);

export const EventRoutes = router;
