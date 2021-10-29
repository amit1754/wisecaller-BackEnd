import express from "express";
import { woucherController } from "../controller";
import { validate } from "../middlewares/validations";
import { woucher } from "../middlewares/schema/auth";
import {authorization} from '../middlewares'

const router = express.Router();

router.post("/add", [validate(woucher)], [authorization], woucherController.add);
router.get("/get", woucherController.show);
router.put("/update/:id", [validate(woucher)], [authorization], woucherController.update);
router.delete("/delete/:id", [authorization], woucherController.deleteWoucher);


export const WoucherRoutes = router;
