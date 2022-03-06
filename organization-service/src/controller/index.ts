import AuthController from "./v1/auth";
import CouponController from "./v1/coupon";
import OrganizationController from "./v1/organaztion";
import SubscriptionController from "./v1/subscription";
import NotesController from "./v1/note";
import StatusController from "./v1/status"
import UserController from "./v1/user";

export const Auth = new AuthController();
export const Organization = new OrganizationController();
export const User = new UserController();
export const Coupon = new CouponController();
export const Subscription = new SubscriptionController();
export const Notes = new NotesController();
export const Status = new StatusController();