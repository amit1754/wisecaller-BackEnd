import mongoose, { Document, PaginateModel } from "mongoose";
const { Schema, model } = mongoose;
import paginate from "mongoose-paginate-v2";

const StatusSchema = new Schema(
  {
    text: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

StatusSchema.plugin(paginate);

StatusSchema.post("find", function (doc) {
  if (doc) {
    doc.map((x: any) => {
      delete x.notification_token;
      return x;
    });
  }
  return doc;
});

StatusSchema.post("findOne", function (doc) {
  if (doc) {
    delete doc.notification_token;
  }
  return doc;
});

interface StatusDocument extends Document {}

export const Status = model<StatusDocument, PaginateModel<StatusDocument>>(
  "Status",
  StatusSchema,
  "status"
);
