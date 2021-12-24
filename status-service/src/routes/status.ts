import express from "express";
import { status_Controller } from "../controller";
import {authorization} from '../middlewares'
const router = express.Router();
import upload from '../middlewares/uploadService';

router.post("/add",authorization,upload.filesizeChecker, upload.upload.single('logo'), status_Controller.addStatus);
router.get("/get", status_Controller.getAll);
router.post("/add-sub",authorization, upload.filesizeChecker, upload.upload.single('logo') ,status_Controller.addSubStatus);
router.delete("/delete/:id",authorization, status_Controller.delete);
router.put("/update/:id",authorization, upload.filesizeChecker, upload.upload.single('logo'), status_Controller.update);
router.put("/sub-update/:id",authorization, upload.filesizeChecker, upload.upload.single('logo'), status_Controller.updateSubStatus);
router.delete("/sub-delete/:id", authorization,status_Controller.deleteSub);

export const EventRoutes = router;
