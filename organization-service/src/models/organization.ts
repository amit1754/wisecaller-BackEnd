import { Document, model, PaginateModel, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const OrganizationSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    address_details: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    gst: {
      type: String,
    },
    pan: {
      type: String,
    },
    contact_information: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone_no: {
        type: String,
      },
    },
    website: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ORGANIZATION", "ADMIN"],
      default: "ORGANIZATION",
    },
    subscription: {
      type: Schema.Types.ObjectId,
      ref: "Subscription",
    },
    plan: {
      type: Schema.Types.ObjectId,
      ref: "Plan",
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);

OrganizationSchema.plugin(paginate);

interface OrganizationDocument extends Document {}

export const Organization = model<
  OrganizationDocument,
  PaginateModel<OrganizationDocument>
>("Organization", OrganizationSchema, "organizations");
