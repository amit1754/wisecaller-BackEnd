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
      ref: "userstatus",
    },
    icon_style: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserSubStatus = model("usersubstatuses", SatusSubSchema);
