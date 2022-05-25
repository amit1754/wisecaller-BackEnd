import { Schema, model } from "mongoose";

const customStatusSchema = new Schema(
  {
    custom_name: { type: String },
    customId: { type: String },
    start_date: { type: Date },
    end_date: { type: Date },
    is_allday_status: { type: Boolean, default: false },
    has_processed: { type: Boolean, default: false },
    RRULE: { type: Object },
    time_zone: { type: String },
    status: {
      type: Schema.Types.ObjectId,
      ref: "userstatus",
      default: null,
    },
    substatus: {
      type: Schema.Types.ObjectId,
      ref: "usersubstatuses",
      default: null,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
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

export const customStatus = model("customStatuses", customStatusSchema);
