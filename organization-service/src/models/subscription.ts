import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";

const SubscriptionSchema = new Schema(
  {
    title: {
      type: String,
    },
    organization: {
      type: Schema.Types.ObjectId,
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
      type: Schema.Types.Mixed,
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

SubscriptionSchema.plugin(paginate);

interface SubscriptionDocument extends Document {}

export const Subscription = model<
  SubscriptionDocument,
  PaginateModel<SubscriptionDocument>
>("Subscription", SubscriptionSchema, "subscriptions");
