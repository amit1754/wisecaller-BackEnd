import { Schema, model } from "mongoose";

const CallHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    contactId: {
      type: Schema.Types.ObjectId,
      ref: "user_contact",
      default: null,
    },

    name: {
      type: Schema.Types.String,
    },
    phone: {
      type: Schema.Types.String,
    },

    callHistory: [
      {
        time: { type: String },
        type: { type: String },
        simId: { type: String, default: "sim1" },
      },
    ],

    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const CallHistory = model("user_call_history", CallHistorySchema);
