import mongoose, { Document, PaginateModel } from "mongoose";
const { Schema, model } = mongoose;
import paginate from "mongoose-paginate-v2";

const NoteSchema = new Schema(
  {
    is_custom: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
    display_to: {
      type: String,
      enum: ["ALL", "CONTACTS"],
    },
    type: {
      type: String,
    },
    auto_sms: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

NoteSchema.plugin(paginate);

interface NoteDocument extends Document {}

export const Notes = model<NoteDocument, PaginateModel<NoteDocument>>(
  "Note",
  NoteSchema,
  "notes"
);
