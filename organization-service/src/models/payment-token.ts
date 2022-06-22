import { model, Schema } from "mongoose";

const PaymentTokenSchema = new Schema(
  {
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
    },
    url: {
      type: String,
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
    expiredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const PaymentToken = model("payment-tokens", PaymentTokenSchema);
