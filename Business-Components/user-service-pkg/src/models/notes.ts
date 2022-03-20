const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema,model } = mongoose;

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

export const Notes =  mongoose.models.notes || mongoose.model("notes", NotesSchema);
