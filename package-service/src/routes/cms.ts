import express from "express";

import passport from "passport";
import{authorization} from '../middlewares'
import {CmsController} from '../controller'
const router = express.Router();

router.post("/add",  [authorization], CmsController.add);
router.get("/get", CmsController.show);
router.put("/update/:id",  [authorization], CmsController.update);
router.delete("/delete/:id", [authorization], CmsController.deleteCmspage);


export const CmsRoutes = router;
