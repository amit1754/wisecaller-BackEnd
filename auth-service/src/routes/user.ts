import express from "express";
import { User } from "../controller";
const router = express.Router();
import fileUpload from "@wisecaller/s3";

router.put(
  "/update-profile",
  fileUpload.filesizeChecker,
  fileUpload.fileUpload("PROFILE").single("profile_image"),
  User.update
);
router.post("/search", User.searchWisecaller);
router.get("/get-profile", User.show);
router.post("/add-devices", User.addDevices);
router.put("/update-user-status", User.updateUserStatus);
router.post("/register-device", User.userDevice);

export const UserRoutes = router;
