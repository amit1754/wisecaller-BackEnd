const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema,model } = mongoose;
const ContactSyncSchema = new Schema(
  {
    contactId: {
      type: String,
    },
    contact: {
      //for user contact identifier
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

export const UserContact  = mongoose.models.user_contacts|| model("user_contacts", ContactSyncSchema);
