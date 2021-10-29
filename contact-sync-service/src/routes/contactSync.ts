import express from "express";
import { contactSync_Controller } from "../controller";
const router = express.Router();
import {authorization} from '../middlewares'

router.post("/sync", [authorization], contactSync_Controller.add);
router.get("/get", [authorization], contactSync_Controller.getAll);

export const SyncRoutes = router;
