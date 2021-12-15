import express from "express";
import { Message } from "../controller";
import { authorization } from "../middlewares";
const router = express.Router();

router.post("/", authorization, Message.index);

export const MessageRoutes = router;
