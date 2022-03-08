import mongoose, { Document, PaginateModel } from "mongoose";
const { Schema, model } = mongoose;
import paginate from "mongoose-paginate-v2";

const NoteSchema = new Schema(
  {
    text: {
      type: String,
      default: null,
    },
    createdAt: {
      type: Date
    }
  },
  { timestamps: true }
);

NoteSchema.plugin(paginate);

NoteSchema.post("find", function (doc) {
  if (doc) {
    doc.map((x: any) => {
      delete x.notification_token;
      return x;
    });
  }
  return doc;
});

NoteSchema.post("findOne", function (doc) {
  if (doc) {
    delete doc.notification_token;
  }
  return doc;
});

interface NoteDocument extends Document {}

export const Note = model<NoteDocument, PaginateModel<NoteDocument>>(
  "Note",
  NoteSchema,
  "notes"
);
