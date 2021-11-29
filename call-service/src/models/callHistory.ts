import { Schema, model } from "mongoose";

const CallHistorySchema = new Schema(
  // {
  //   user: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //     default: null,
  //   },

  //   contactId: {
  //     type: Schema.Types.ObjectId,
  //     ref: "user_contact",
  //     default: null,
  //   },

  //   name: {
  //     type: Schema.Types.String,
  //   },
  //   phone: {
  //     type: Schema.Types.String,
  //   CallHistory},

  //   callHistory: [
  //     {
  //       time: { type: Date },
  //       type: { type: String },
  //       simId: { type: String, default: "sim1" },
  //     },
  //   ],

  //   date: {
  //     type: Date,
  //   },
  //   caller_history_id: {
  //     type: String,
  //   },
  //   is_deleted: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  {
    call_history_id: {
      type: Number,
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
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    contact: {
      type: Schema.Types.ObjectId,
      ref: "user_contact",
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
