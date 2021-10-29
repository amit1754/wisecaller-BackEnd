import express from "express";

import { paymentsController } from "../controller";
const router = express.Router();
import { authorization} from "../middlewares";


router.post("/add", [authorization], paymentsController.add);
router.get("/get", [authorization], paymentsController.show);

export const PaymentRoutes = router;
