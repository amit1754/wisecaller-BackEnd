import express from "express";
import { callHistoryController } from "../controller";

const router = express.Router();

router.post("/add", callHistoryController.add);
router.post("/add-number", callHistoryController.addNumber);
router.post("/sync-history", callHistoryController.syncHistory);
router.get("/get-history", callHistoryController.getHistory);
router.get("/get", callHistoryController.callDetails);
router.delete("/delete/:id", callHistoryController.deleteNumber);

export const CallHistorotRoutes = router;
