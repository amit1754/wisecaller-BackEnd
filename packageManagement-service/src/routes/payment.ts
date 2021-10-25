import express from "express";
import passport from "passport";
import { paymentsController } from "../controller";
const router = express.Router();
import { packages } from "../middlewares/schema/auth";
const auth: any = passport.authenticate("jwt", { session: false });

router.post("/add", [auth], paymentsController.add);
router.get("/get", [auth], paymentsController.show);

export const PaymentRoutes = router;
