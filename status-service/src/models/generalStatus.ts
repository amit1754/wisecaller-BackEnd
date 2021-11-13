import { Schema, model } from "mongoose";

const generalStatusSchema = new Schema(
  {
    name: {
      type: String,
    },
    priority: {
      type: Number,
    },
    applicable_types: {
      type: Object,
    },
  },
  { timestamps: true }
);

export const generalStatusModel = model("general_status", generalStatusSchema);
