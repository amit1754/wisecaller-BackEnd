import { Schema, model, PaginateModel, Document } from "mongoose";
import paginate from "mongoose-paginate-v2";

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

CouponSchema.plugin(paginate);

interface CouponDocument extends Document {}

export const Coupon = model<CouponDocument, PaginateModel<CouponDocument>>(
  "Coupon",
  CouponSchema,
  "coupons"
);
