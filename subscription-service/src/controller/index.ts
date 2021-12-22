import CouponController from "./v1/coupon";
import PaymentController from "./v1/payment";
import SubscriptionController from "./v1/subscription";
import UserSubscriptionController from "./v1/user_subscription";

export const Coupon = new CouponController();
export const Subscription = new SubscriptionController();
export const UserSubscription = new UserSubscriptionController();
export const Payment = new PaymentController();
