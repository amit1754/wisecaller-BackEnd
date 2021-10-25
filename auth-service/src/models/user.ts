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
      enum: ['ADMIN', 'USER'],
      default: 'USER'
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
      default: null
    }
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
