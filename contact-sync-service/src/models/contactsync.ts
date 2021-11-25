import { Schema, model } from "mongoose";

const ContactSyncSchema = new Schema(
  {
    contactId: {
      type: Number,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    contact: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
      default: null,
    },
    local_profile_image_path: {
      type: String,
      default: null,
    },
    phones: [
      {
        ph_no: { type: String, required: true },
        type: { type: String, required: true },
        contact_id: { type: Schema.Types.ObjectId },
      },
    ],
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

export const UserContact = model("user_contact", ContactSyncSchema);
