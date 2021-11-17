import { Schema, model } from "mongoose";

const SatusSchema = new Schema(
  {
    status: {
      type: String,
    },
    logo: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    priority: {
      type: Number,
    },
    applicable_types: [
      {
        type: Schema.Types.ObjectId,
        ref: "globalType",
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserStatus = model("UserSatus", SatusSchema);
