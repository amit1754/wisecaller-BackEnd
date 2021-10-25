import PackagesController from "./v1/packages";
import WoucherController from "./v1/woucher";
import paymentcontroller from "./v1/paymentController";
import cmsController from "./v1/cmsController";

export const packageController = new PackagesController();
export const woucherController = new WoucherController();
export const paymentsController = new paymentcontroller();
export const CmsController = new cmsController();
