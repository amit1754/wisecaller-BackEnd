import { Schema, model } from "mongoose";

const globalTypeSchema = new Schema(
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

export const globalTypeModel = model("globaltypes", globalTypeSchema);
