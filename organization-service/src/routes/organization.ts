import { Router } from "express";
import { Organization } from "../controller";
import { authorization } from "../middlewares/authorization";

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
  [authorization],
  Organization.updateOrganizationProfile
);
router.post("/export-csv", [authorization], Organization.exportCSV);
router.put("/update/:id", Organization.updateOrganization);
router.post("/update", Organization.updateOrganization);
router.delete("/delete/:id", Organization.deleteOrganization);
router.get("/subscribers/:id", Organization.reportOrganization); //organazation subscriber report
router.get("/coupon/:id", Organization.organazationCoupon); //organazation coupon
router.delete("/delete-by-admin/:id", Organization.deleteAdminOrganizaion);

export const OrganazationRoutes = router;
