import { Schema, model, Document, PaginateModel } from "mongoose";

const GlobalTypesSchema = new Schema(
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

interface GlobalTypesDocument extends Document {}

export const GlobalTypes = model<
  GlobalTypesDocument,
  PaginateModel<GlobalTypesDocument>
>("GlobalTypes", GlobalTypesSchema, "globaltypes");
