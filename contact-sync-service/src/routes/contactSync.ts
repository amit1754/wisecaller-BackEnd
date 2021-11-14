import express from "express";
import { contactSync_Controller } from "../controller";
const router = express.Router();
import {authorization} from '../middlewares'

router.post("/sync", [authorization], contactSync_Controller.sync);
router.post("/search", [authorization], contactSync_Controller.searchContact);
router.post(
  "/search-wisecaller",
  [authorization],
  contactSync_Controller.searchWisecaller
);
router.get("/get", [authorization], contactSync_Controller.getAll);
router.put("/update", [authorization], contactSync_Controller.updtateContact);
router.delete(
  "/delete/:id",
  [authorization],
  contactSync_Controller.deleteContact
);

export const SyncRoutes = router;
