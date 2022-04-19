import { Schema, model } from "mongoose";

const UsageSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    loggedOn: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export const Usage = model("usage", UsageSchema);
