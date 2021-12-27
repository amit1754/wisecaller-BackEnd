import { model, Schema } from "mongoose";

const OrganizationSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    website: {
      type: String,
    },
    phone_no: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: ["ORGANIZATION"],
      default: "ORGANIZATION",
    },
  },
  { timestamps: true }
);

export const Organization = model("Organization", OrganizationSchema);
