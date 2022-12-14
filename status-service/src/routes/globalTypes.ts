import express from "express";
import { global_status_Controller } from "../controller";
import { authorization } from "@wisecaller/authorizer";

const router = express.Router();

router.post("/add", authorization, global_status_Controller.add);
router.put("/update/:id", authorization, global_status_Controller.update);
router.delete("/delete/:id", authorization, global_status_Controller.delteType);
router.get("/get", authorization, global_status_Controller.get);

export const globalTypesRoutes = router;
