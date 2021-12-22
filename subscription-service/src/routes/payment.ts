import { Router } from "express";
import { Payment } from "../controller";

const router = Router();

router.post("/", Payment.index);
router.post("/order", Payment.order);

export const PaymentRoutes = router;
