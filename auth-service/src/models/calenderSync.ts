import { Schema, model } from "mongoose";
import { UserStatus } from "./status";

const CalenderSyncSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    calenders: [
      {
        id: { type: String, comment: "email address" },
        synced: { type: Boolean, default: false },
        is_deleted: { type: Boolean, default: false },
      },
    ],

    prioritize_calender_events: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: UserStatus,
    },
  },
  { timestamps: true }
);

export const UserCalender = model("user_calender", CalenderSyncSchema);
