import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const { Schema, model } = mongoose;

const UserSubscriptionSchema = new mongoose.Schema({
  subscription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subscriptions",
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organizations",
  },
  coupon_code: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
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
export const UserSubscription =
  mongoose.models.UserSubscription ||
  model("usersubscriptions", UserSubscriptionSchema);
