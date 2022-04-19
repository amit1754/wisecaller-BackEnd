import { model, Schema } from "mongoose";

const CallActivitySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
    },
    caller: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    calledOn: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export const CallActivity = model("callactivity", CallActivitySchema);
