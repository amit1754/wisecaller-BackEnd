import { Router } from "express";
import { Payment } from "../controller";
import { authorization } from "../middelware/auth";

const router = Router();

router.post("/", [authorization], Payment.index);
router.post("/order", Payment.order);
router.post(
  "/organization-payment",
  [authorization],
  Payment.paymentForOrganization
);
router.post(
  "/demo",
  Payment.demo
);
router.post("/generate-invoice", Payment.generateInvoice)
router.get(
  "/getall-transacation",
  [authorization],
  Payment.getAllTransacation
);

export const PaymentRoutes = router;
