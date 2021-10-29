import express from "express";
import { calenderSync_Controller } from "../controller";
const router = express.Router();
import{authorization} from '../middlewares'

router.post("/sync", [authorization], calenderSync_Controller.add);
router.get("/get", [authorization], calenderSync_Controller.getAll);
router.put("/update/:id", [authorization], calenderSync_Controller.deleteEmail)

export const calanderSyncRoutes = router;
