import { Schema, model } from "mongoose";

const ContactSyncSchema = new Schema(
  {
    customId: {
      type: Number,
      unique: true,
    },
    user: {
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
        wisecallerId: { type: Schema.Types.ObjectId, default: null },
      },
    ],
  },
  { timestamps: true }
);

export const UserContact = model("user_contacts", ContactSyncSchema);
