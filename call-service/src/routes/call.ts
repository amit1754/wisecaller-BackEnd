import express from "express";
import { callHistoryController } from '../controller';

const router = express.Router();

router.post("/add", callHistoryController.add);
router.post("/add-number", callHistoryController.addNumber);
router.get("/get", callHistoryController.callDetails);
router.delete("/delete/:id", callHistoryController.deleteNumber);
// router.post("/favorite-add",callHistoryController.addFavorite);
// router.post("/block-add", callHistoryController.addBlock);
export const CallHistorotRoutes = router;
