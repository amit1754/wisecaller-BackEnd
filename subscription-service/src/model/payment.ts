import { Schema, model } from "mongoose";

let PaymentSchema = new Schema(
  {
    transactionId: {
      type: String,
    },
    subscription: {
      type: Schema.Types.ObjectId,
      ref: "UserSubscription",
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
