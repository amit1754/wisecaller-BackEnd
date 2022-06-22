import { Router } from "express";
import { Organization } from "../controller";
import { authorization } from "../middlewares/authorization";
import { upload } from "../utils";

const router = Router();

router.post("/", Organization.index);
router.get("/list", Organization.getOrganization);
router.get(
  "/get-profile",
  [authorization],
  Organization.getOrganizationProfile
);
router.post(
  "/overview",
  [authorization],
  Organization.organizationOverviewSummary
);
router.post(
  "/update-organization-profile",
  [authorization, upload.single("profile")],
  Organization.updateOrganizationProfile
);
router.post("/export-csv", [authorization], Organization.exportCSV);
router.post(
  "/regenerate-payment-token",
  [authorization],
  Organization.regeneratePaymentToken
);
router.put("/update/:id", Organization.updateOrganization);
router.post("/update", Organization.updateOrganization);
router.delete("/delete/:id", Organization.deleteOrganization);
router.get("/subscribers/:id", Organization.reportOrganization); //organazation subscriber report
router.get("/coupon/:id", Organization.organazationCoupon); //organazation coupon
router.delete("/delete-by-admin/:id", Organization.deleteAdminOrganizaion);
router.post(
  "/upload-image-aws",
  [upload.single("image")],
  Organization.uploadImageAws
);

export const OrganazationRoutes = router;
