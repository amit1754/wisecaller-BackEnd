import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      default: null,
    },
    last_name: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
      unique: true,
    },
    secondary_no: {
      type: String,
      default: null,
      unique: true,
    },
    phones: [
      {
        no: { type: String },
        used_for_login: { type: Boolean, default: false },
      },
    ],

    profile_image: {
      type: String,
      default: null,
    },
    is_profile_from_social_media: {
      type: String,
      default: false,
    },
    media_profile_url: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    devices: {
      type: Object,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    user_status: {
      type: Schema.Types.Mixed,
    },
    // user_status: {
    //   type: Schema.Types.ObjectId,
    //   ref: "UserSatus",
    //   default: null,
    // },
    // user_sub_status: {
    //   type: Schema.Types.ObjectId,
    //   ref: "UserSubStatus",
    //   default: null,
    // },
    // custom_status: {
    //   type: Schema.Types.ObjectId,
    //   ref: "UserSubStatus",
    //   default: null,
    // },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
