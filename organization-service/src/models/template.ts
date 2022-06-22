import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";

const TemplateSchema = new Schema({
  name: {
    type: String,
  },
  template: {
    type: String,
  },
  section: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

TemplateSchema.plugin(paginate);

interface PageDocument extends Document {}

export const Template = model<PageDocument, PaginateModel<PageDocument>>(
  "Template",
  TemplateSchema,
  "templates"
);
