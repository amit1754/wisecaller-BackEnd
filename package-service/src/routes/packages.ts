import express from "express";
import { packageController } from "../controller";
import { validate } from "../middlewares/validations";
import { packages } from "../middlewares/schema/auth";
import {authorization} from "../middlewares"
const router = express.Router();

router.post("/add", [validate(packages)], [authorization], packageController.add);
router.get("/get", packageController.show);
router.put("/update/:id", [validate(packages)], [authorization], packageController.update);
router.delete("/delete/:id", [authorization], packageController.deletePackage);


export const PackageRoutes = router;
