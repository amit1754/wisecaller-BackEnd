import { Schema, model } from "mongoose";

const PlanSchema = new Schema(
  {
    name: {
      type: String,
    },

    subscription: {
      type: Schema.Types.ObjectId,
      ref: "Subscription",
    },
    minSlab: {
      type: Number,
    },
    maxSlab: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Plan = model("plans", PlanSchema);
