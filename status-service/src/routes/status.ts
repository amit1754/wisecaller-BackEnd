import express from "express";
import { status_Controller } from "../controller";
import { authorization } from "@wisecaller/authorizer";
const router = express.Router();


router.post("/add",authorization, status_Controller.addStatus);
router.get("/get",authorization, status_Controller.getAll);
router.post("/add-sub",authorization ,status_Controller.addSubStatus);
router.delete("/delete/:id",authorization, status_Controller.delete);
router.put("/update/:id",authorization, status_Controller.update);
router.put("/sub-update/:id",authorization, status_Controller.updateSubStatus);
router.delete("/sub-delete/:id", authorization,status_Controller.deleteSub);

export const EventRoutes = router;
