import { Schema, model } from "mongoose";

const CouponSchema = new Schema(
  {
    coupon_code: {
      type: String,
    },
    total_subscription: {
      type: Number,
      default: 0,
    },
    used_subscription: {
      type: Number,
      default: 0,
    },
    can_use_for: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
    },
    discount_price: {
      type: Number,
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
    },
    subscription: {
      type: Schema.Types.ObjectId,
      ref: "Subscription",
    },
    type: {
      type: String,
      enum: ["CASH_DISCOUNT", "ORGANIZATION"],
    },
    expires_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Coupon = model("coupons", CouponSchema);
