import express from "express";
import { contactSync_Controller } from "../controller";
const router = express.Router();
import {authorization} from '../middlewares'

router.post("/sync", [authorization], contactSync_Controller.sync);
router.get("/get", [authorization], contactSync_Controller.getAll);
router.put("/update", [authorization], contactSync_Controller.updtateContact);

export const SyncRoutes = router;
