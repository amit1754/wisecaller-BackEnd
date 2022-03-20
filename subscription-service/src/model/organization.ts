import { model, Schema } from "mongoose";

const OrganizationSchema = new Schema(
  {
    company_name: {
      type: String,
    },
    company_email: {
      type: String,
    },
    personal_address: {
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
    contact_name: {
      type: String,
    },
    contact_email: {
      type: String,
    },
    phone_no: {
      type: String,
    },
    website: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ORGANIZATION"],
      default: "ORGANIZATION",
    },
  },
  { timestamps: true }
);

export const Organization = model("organizations", OrganizationSchema);
