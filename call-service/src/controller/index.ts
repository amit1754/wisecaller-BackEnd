import callHistory from "./v1/callHistorory";
import CallActivityController from "./v1/call_activity";

export const callHistoryController = new callHistory();
export const CallActivity = new CallActivityController();
