import statusController from "./v1/status";
import CustomStatusController from "./v1/customStatus";
import GlobalTypeController from "./v1/globalTypeController";
import generalStatusController from "./v1/generalStatusController";

export const status_Controller = new statusController();
export const Custom_status_Controller = new CustomStatusController();
export const global_status_Controller = new GlobalTypeController();
export const general_status_Controller = new generalStatusController();
