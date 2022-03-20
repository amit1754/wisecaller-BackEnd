import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
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
      ref: "users",
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Notes = mongoose.model("notes", NotesSchema);
