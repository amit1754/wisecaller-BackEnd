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
router.post("/search", User.searchWisecaller);
router.get("/get-profile", User.show);
router.post("/add-devices", User.addDevices);
router.put("/update-user-status", User.updateUserStatus)

export const UserRoutes = router;


