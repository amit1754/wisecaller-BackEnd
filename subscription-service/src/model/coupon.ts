import { Schema, model } from "mongoose";

const CouponSchema = new Schema(
  {
    coupon_code: {
      type: String,
    },
    can_use_for: {
      type: Number,
    },
    price: {
      type: Number,
    },
    discount_price: {
      type: Number,
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "User",
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

export const Coupon = model("Coupon", CouponSchema);
