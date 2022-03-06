import { Router } from "express";
import { Status } from "../controller";

const router = Router();

router.post("/", Status.index);

export const StatusRoutes = router;
