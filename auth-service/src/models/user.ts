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
    },
    secondary_no: {
      type: String,
      default: null,
    },
    phones: [
      {
        no: { type: String },
        used_for_login: { type: Boolean, default: false },
        type: { type: String },
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
    modes: {
      workLifeBalance: {
        is_active: { type: Boolean, default: false },
        data: { type: Schema.Types.Mixed, default: null },
      },
      roadSafetyStatus: {
        is_active: { type: Boolean, default: false },
        devices: { type: Schema.Types.Mixed, default: null },
        data: { type: Schema.Types.Mixed, default: null },
      },
      syncCalender: {
        calenders: { type: Schema.Types.Mixed, default: null },
        priooritize_calender_events: { type: Boolean, default: false },
        status: {
          type: Schema.Types.Mixed,
        },
      },
    },
  },
  { timestamps: true }
);

export const User = model("User", UserSchema);
