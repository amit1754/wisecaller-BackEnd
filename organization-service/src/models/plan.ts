import { Schema, model, PaginateModel, Document } from "mongoose";
import paginate from "mongoose-paginate-v2";

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

PlanSchema.plugin(paginate);

interface PlanDocument extends Document {}

export const Plan = model<PlanDocument, PaginateModel<PlanDocument>>(
  "Plan",
  PlanSchema,
  "plans"
);
