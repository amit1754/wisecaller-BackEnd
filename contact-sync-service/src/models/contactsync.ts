import { Schema, model } from "mongoose";

const ContactSyncSchema = new Schema(
  {
    contactId: {
      type: String,
    },
    contact: {
      //for user contact identifier
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    profile_image: {
      type: String,
      default: null,
    },
    local_profile_image_path: {
      type: String,
      default: null,
    },
    is_blocked: {
      type: Boolean,
      default: false,
    },
    is_favourite: {
      type: Boolean,
      default: false,
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

export const UserContact = model("user_contacts", ContactSyncSchema);
