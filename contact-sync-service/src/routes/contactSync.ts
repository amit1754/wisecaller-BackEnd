import express from "express";
import { contactSync_Controller } from "../controller";
const router = express.Router();
import { authorization } from "@wisecaller/authorizer";

router.post("/sync", [authorization], contactSync_Controller.sync);
router.post("/search", [authorization], contactSync_Controller.searchContact);

router.get("/get", [authorization], contactSync_Controller.getAll);
router.put("/update", [authorization], contactSync_Controller.updtateContact);
router.delete(
  "/delete/:id",
  [authorization],
  contactSync_Controller.deleteContact
);

router.post(
  "/favorite-add",
  [authorization],
  contactSync_Controller.addFavorite
);
router.post("/block-add", [authorization], contactSync_Controller.addBlock);
router.post(
  "/callback-request",
  [authorization],
  contactSync_Controller.callBack
);

export const  SyncRoutes = router;
