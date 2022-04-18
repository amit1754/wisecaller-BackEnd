import { Schema, model } from "mongoose";

const UserSubscriptionSchema = new Schema({
  subscription: {
    type: Schema.Types.ObjectId,
    ref: "Subscription",
  },
  organization: {
    type: Schema.Types.ObjectId,
    ref: "Organization",
  },
  coupon_code: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  is_revoked: {
    type: Boolean,
    default: false,
  },
  revoked_reason: {
    type: String,
  },
  subscription_created_date: {
    type: Date,
  },
  subscription_end_date: {
    type: Date,
  },
  is_active: {
    type: Boolean,
    default: false,
  },
});

export const UserSubscription = model(
  "UserSubscription",
  UserSubscriptionSchema
);
