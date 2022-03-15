import mongoose from "mongoose";
const { model } = mongoose;

const SubscriptionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    original_price: {
      type: Number,
    },
    current_price: {
      type: Number,
    },
    min_quantity_price: {
      type: Number,
    },
    features: {
      type: mongoose.Schema.Types.Mixed,
    },
    gst_percentage: {
      type: Number,
    },
    cess_percentage: {
      type: Number,
    },
    type: {
      type: String,
      enum: ["USER", "ORGANIZATION"],
      default: "USER",
    },
    duration: {
      type: Number, //It should be months
    },
  },
  { timestamps: true }
);

export const Subscription =
  mongoose.models.Subscription || model("Subscription", SubscriptionSchema);
