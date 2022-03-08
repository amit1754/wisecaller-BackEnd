import AuthController from "./v1/auth";
import CouponController from "./v1/coupon";
import OrganizationController from "./v1/organaztion";
import PlanController from "./v1/plan";
import SubscriptionController from "./v1/subscription";
import UserController from "./v1/user";

export const Auth = new AuthController();
export const Organization = new OrganizationController();
export const User = new UserController();
export const Coupon = new CouponController();
export const Subscription = new SubscriptionController();
export const Plan = new PlanController();
