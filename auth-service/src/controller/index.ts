import AuthController from "./v1/auth";
import UserController from "./v1/user";
import RoadSafetyController from "./v1/road-safety";
import calenderSyncController from "./v1/calendar-sync";

export const Auth = new AuthController();
export const User = new UserController();
export const RoadSafety = new RoadSafetyController();
export const CalenderSync = new calenderSyncController();
