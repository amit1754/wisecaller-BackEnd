import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
    email: {
      type: String,
    },
    contryCode: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    devices: {
      type: Object,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "UserSatus",
      default: null,
    },
    subStatus: {
      type: Schema.Types.ObjectId,
      ref: "UserSubStatus",
      default: null,
    },
    is_new_user: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
    email: {
      type: String,
    },
    contryCode: {
      type: String,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    devices: {
      type: Object,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "UserSatus",
      default: null,
    },
    subStatus: {
      type: Schema.Types.ObjectId,
      ref: "UserSubStatus",
      default: null,
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
