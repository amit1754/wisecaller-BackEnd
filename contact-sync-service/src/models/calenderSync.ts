import { Schema, model } from "mongoose";

const CalenderSyncSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    calendars: [
      {
        id: { type: String, comment: "email address" },
        synced: { type: Boolean, default: false },
        is_deleted: { type: Boolean, default: false },
      },
    ],

    prioritize_calendar_events: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "UserSatus",
    },
  },
  { timestamps: true }
);

export const UserCalender = model("user_calender", CalenderSyncSchema);
