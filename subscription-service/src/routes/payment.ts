import { Router } from "express";
import { Payment } from "../controller";
import { authorization } from "@wisecaller/authorizer";

const router = Router();

router.post("/", [authorization], Payment.index);
router.post("/order", Payment.order);
router.post(
  "/organization-payment",
  [authorization],
  Payment.paymentForOrganization
);

export const PaymentRoutes = router;