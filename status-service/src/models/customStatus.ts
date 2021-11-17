import { Schema, model } from "mongoose";

const customStatusSchema = new Schema(
  {
    custom_name: { type: String },
    customId: { type: Number, unique: true },
    start_date: { type: Date },
    end_date: { type: Date },
    is_allday_status: { type: Boolean, default: false },
    RRULE: { type: String },
    time_zone: { type: String },
    status: {
      type: Schema.Types.ObjectId,
      ref: "UserSatus",
      default: null,
    },
    substatus: {
      type: Schema.Types.ObjectId,
      ref: "UserSubStatus",
      default: null,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    notes: {
      is_custom: { type: String },
      text: { type: String },
      noteId: { type: Schema.Types.ObjectId, default: null }, //ref of notes
    },
    display_to: {
      type: String,
      enum: ["CONTACT", "ALL"],
      default: "CONTACT",
    },
    auto_sms: { type: Boolean, default: false },
    is_enabled: {
      type: Boolean,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

export const customStatus = model("customStatus", customStatusSchema);
