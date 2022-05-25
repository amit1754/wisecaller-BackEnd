import express from "express";
import { Custom_status_Controller } from "../controller";
import { authorization } from "@wisecaller/authorizer";

const router = express.Router();

router.post("/add", authorization, Custom_status_Controller.add);
router.put("/update", authorization, Custom_status_Controller.update);
router.delete(
  "/delete/:id",
  authorization,
  Custom_status_Controller.delteStatus
);
router.get("/get", authorization,Custom_status_Controller.get);
router.post("/triggerStatusperday", Custom_status_Controller.expandAndSetRuleForCustomStatus);

export const CustomStatusRoutes = router;
