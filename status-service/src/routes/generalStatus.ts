import express from "express";
import { general_status_Controller } from "../controller";
import { authorization } from "@wisecaller/authorizer";

const router = express.Router();

router.post("/add", authorization, general_status_Controller.add);
router.put("/update/:id", authorization, general_status_Controller.update);
router.delete(
  "/delete/:id",
  authorization,
  general_status_Controller.delteType
);
router.get("/get", general_status_Controller.get);

export const generalStatusRoutes = router;
