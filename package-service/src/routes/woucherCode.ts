import express from "express";
import { woucherController } from "../controller";
import { validate } from "../middlewares/validations";
import { woucher } from "../middlewares/schema/auth";
import passport from "passport";
const auth: any = passport.authenticate("jwt", { session: false });

const router = express.Router();

router.post("/add", [validate(woucher)], [auth], woucherController.add);
router.get("/get", woucherController.show);
router.put("/update/:id", [validate(woucher)], [auth], woucherController.update);
router.delete("/delete/:id", [auth], woucherController.deleteWoucher);


export const WoucherRoutes = router;
