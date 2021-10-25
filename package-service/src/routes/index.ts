import express from "express";

import { PackageRoutes } from './packages';
import { WoucherRoutes } from './woucherCode';
import { PaymentRoutes } from './payment';
import { CmsRoutes } from './cms';

const router = express.Router();


router.use("/packages", PackageRoutes);
router.use("/woucher", WoucherRoutes);
router.use("/payment", PaymentRoutes);
router.use("/cms", CmsRoutes);

export default router;
