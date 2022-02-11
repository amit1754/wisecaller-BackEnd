import { authorization } from "@wisecaller/authorizer";
import { Router } from "express";
import { Organization } from "../controller";

const router = Router();

router.get("/list", Organization.getOrganization);
router.get("get-profile", [authorization], Organization.getOrganizationProfile);
router.put("/update/:id", Organization.updateOrganization);
router.delete("/delete/:id", Organization.deleteOrganization);
router.get("/subscribers/:id", Organization.reportOrganization); //organazation subscriber report
router.get("/coupon/:id", Organization.organazationCoupon); //organazation coupon

export const OrganazationRoutes = router;
