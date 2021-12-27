import { model, Schema } from "mongoose";

const OrganizationSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
    phone_no: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ORGANIZATION"],
      default: "ORGANIZATION",
    },
    is_new_user: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Organization = model("Organization", OrganizationSchema);
