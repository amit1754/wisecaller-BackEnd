import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";

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

GlobalTypesSchema.plugin(paginate);

interface GlobalTypesDocument extends Document {}

export const GlobalTypes = model<
  GlobalTypesDocument,
  PaginateModel<GlobalTypesDocument>
>("GlobalTypes", GlobalTypesSchema, "globaltypes");
