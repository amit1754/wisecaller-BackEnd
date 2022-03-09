import { Schema, model, Document, PaginateModel } from "mongoose";
import paginate from "mongoose-paginate-v2";

const PageSchema = new Schema({
  name: {
    type: String,
  },
  content: {
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

PageSchema.plugin(paginate);

interface PageDocument extends Document {}

export const Pages = model<PageDocument, PaginateModel<PageDocument>>(
  "Pages",
  PageSchema,
  "pages"
);
