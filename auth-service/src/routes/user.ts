import express from "express";
import { User } from "../controller";
const router = express.Router();
import upload from '../middlewares/uploadService';


router.put("/update-profile", upload.single('profileImage'), User.update);
router.get("/get-profile", User.show);

export const UserRoutes = router;
