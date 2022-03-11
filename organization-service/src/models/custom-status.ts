import { Document, model, PaginateModel, Schema } from "mongoose";

const CustomStatusSchema = new Schema(
  {
    custom_name: {
      type: String,
    },
    customId: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    is_allday_status: {
      type: Boolean,
      default: false,
    },
    RRULE: {
      type: String,
    },
    time_zone: {
      type: String,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "UserStatus",
    },
    substatus: {
      type: Schema.Types.ObjectId,
      ref: "UserSubStatus",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    notes: {
      is_custom: {
        type: String,
      },
      text: {
        type: String,
      },
      noteId: {
        type: Schema.Types.ObjectId,
      },
    },
    display_to: {
      type: String,
      enum: ["CONTACT", "ALL"],
      default: "CONTACT",
    },
    auto_sms: {
      type: Boolean,
      default: false,
    },
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

interface CustomStatusDocument extends Document {}

export const CustomStatus = model<
  CustomStatusDocument,
  PaginateModel<CustomStatusDocument>
>("CustomStatus", CustomStatusSchema, "customstatuses");
