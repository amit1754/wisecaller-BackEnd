import express from "express";
import { packageController } from "../controller";
import { validate } from "../middlewares/validations";
import { packages } from "../middlewares/schema/auth";
import passport from "passport";
const auth: any = passport.authenticate("jwt", { session: false });
const router = express.Router();

router.post("/add", [validate(packages)], [auth], packageController.add);
router.get("/get", packageController.show);
router.put("/update/:id", [validate(packages)], [auth], packageController.update);
router.delete("/delete/:id", [auth], packageController.deletePackage);


export const PackageRoutes = router;
