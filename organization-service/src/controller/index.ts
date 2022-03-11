import AuthController from "./v1/auth";
import CouponController from "./v1/coupon";
import OrganizationController from "./v1/organaztion";
import PagesController from "./v1/pages";
import PlanController from "./v1/plan";
import SubscriptionController from "./v1/subscription";
import NotesController from "./v1/notes";
import UserController from "./v1/user";
import GlobalTypesController from "./v1/global-types";
import UserStatusController from "./v1/user-status";

export const Auth = new AuthController();
export const Organization = new OrganizationController();
export const User = new UserController();
export const Coupon = new CouponController();
export const Subscription = new SubscriptionController();
export const Notes = new NotesController();
export const Plan = new PlanController();
export const Pages = new PagesController();
export const GlobalTypes = new GlobalTypesController();
export const UserStatus = new UserStatusController();
