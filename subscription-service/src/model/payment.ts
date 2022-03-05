import { Schema, model } from "mongoose";

let PaymentSchema = new Schema(
  {
    transactionId: {
      type: String,
    },
    subscription: {
      type: Schema.Types.ObjectId,
      ref: "Subscription",
    },
    user_subscription: {
      type: Schema.Types.ObjectId,
      ref: "UserSubscription",
    },
    plan: {
      type: Schema.Types.ObjectId,
      ref: "Plan",
    },
    amount: {
      type: Number,
    },
    paymentFor: {
      type: String,
    },
    status: {
      type: String,
      enum: ["SUCCESS", "FAILURE"],
    },
    mode: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
    },
    payment_date: {
      type: Date,
    },
    invoceUrl: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const Payment = model("Payment", PaymentSchema);
