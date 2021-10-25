import express from "express";
import { callHistoryController } from '../controller';
const router = express.Router();

router.post("/get", callHistoryController.add);
router.post("/call-details", callHistoryController.callDetails);
router.post("/favorite-add", callHistoryController.addFavorite);
router.post("/block-add", callHistoryController.addBlock);

export const CallHistorotRoutes = router;
