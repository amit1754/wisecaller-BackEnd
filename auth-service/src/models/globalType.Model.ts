import { Schema, model } from "mongoose";

const globalTypeSchema1 = new Schema(
  {
    type: {
      type: String,
    },
    order: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const globalTypeModel = model("globalType111", globalTypeSchema1);
