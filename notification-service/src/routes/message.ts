import express from "express";
import { Message } from "../controller";
import { authorization } from "@wisecaller/authorizer";
const router = express.Router();

router.post("/", Message.index);
router.post("/call-me-back", [authorization], Message.callBack);
router.post(
  "/custom-notification",
  [authorization],
  Message.customNotification
);

export const MessageRoutes = router;
