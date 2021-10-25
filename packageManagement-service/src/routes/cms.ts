import express from "express";

import passport from "passport";
import {CmsController} from '../controller'
const auth: any = passport.authenticate("jwt", { session: false });
const router = express.Router();

router.post("/add",  [auth], CmsController.add);
router.get("/get", CmsController.show);
router.put("/update/:id",  [auth], CmsController.update);
router.delete("/delete/:id", [auth], CmsController.deleteCmspage);


export const CmsRoutes = router;
