import express from "express";
import { User } from "../controller";
const router = express.Router();
import upload from '../middlewares/uploadService';


router.put(
  "/update-profile",
  upload.filesizeChecker,
  upload.upload.single("profile_image"),
  User.update
);
router.get("/get-profile", User.show);
router.post("/add-devices", User.addDevices);

export const UserRoutes = router;


