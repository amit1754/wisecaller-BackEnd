import CouponController from "./v1/coupon";
import PaymentController from "./v1/payment";
import SubscriptionController from "./v1/subscription";
import UserSubscriptionController from "./v1/user_subscription";
import PlanController from "./v1/plan";

export const Coupon = new CouponController();
export const Subscription = new SubscriptionController();
export const UserSubscription = new UserSubscriptionController();
export const Payment = new PaymentController();
export const Plan = new PlanController();
