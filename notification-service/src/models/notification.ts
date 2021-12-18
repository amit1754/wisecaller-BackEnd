import { Schema, model } from "mongoose";

const NotificationSchema = new Schema(
  {
    type: {
      type: String,
    },
    from_user: {
      type: Schema.Types.ObjectId,
    },
    to_user: {
      type: Schema.Types.ObjectId,
    },
    dates: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },

  { timestamps: true }
);

export const NotificationModel = model("notification_data", NotificationSchema);
