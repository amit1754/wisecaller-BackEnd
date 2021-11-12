import express from "express";
import { Worklife } from "../controller";
import { workLife } from "../middlewares/schema/workSchema";
import { validate } from "../middlewares/validations";
const router = express.Router();

router.post("/add", [validate(workLife)], Worklife.add);
router.put("/update/:id", Worklife.updateWorkdays);
router.get("/get", Worklife.getWorkdays);
router.delete("/delete/:id", Worklife.deleteWorkdays);


export const workLifeRoutes = router;