import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema(
  {
    price: {
      type: String,
    },
    paymentId: {
      type: String,
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
