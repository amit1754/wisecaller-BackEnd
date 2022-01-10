import { Schema, model } from "mongoose";

const CallHistorySchema = new Schema(
  {
    call_history_id: {
      type: String,
    },
    phone: {
      type: String,
    },
    name: {
      type: String,
    },
    time: {
      type: Date,
    },
    call_type: {
      type: String,
      enum: ["INCOMING", "OUTGOING", "MISSED"],
    },
    sim: {
      type: String,
    },
    loggedin_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const CallHistory = model("user_call_history", CallHistorySchema);
