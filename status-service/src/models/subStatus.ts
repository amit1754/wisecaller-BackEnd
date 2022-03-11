import { Schema, model } from "mongoose";

const SatusSubSchema = new Schema(
  {
    status: {
      type: String,
    },
    logo: {
      type: String,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "UserStatus",
    },
    icon_style: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserSubStatus = model("UserSubStatus", SatusSubSchema);
