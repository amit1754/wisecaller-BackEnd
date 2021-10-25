import express from "express";
import { status_Controller } from "../controller";
const router = express.Router();

router.post("/add", status_Controller.addStatus);
router.get("/get", status_Controller.getAll);
router.delete("/delete/:id", status_Controller.delete);
router.put("/update/:id", status_Controller.update);

export const EventRoutes = router;
