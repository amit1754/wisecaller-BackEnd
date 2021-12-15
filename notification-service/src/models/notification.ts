import { Schema, model } from "mongoose";

const NotificationSchema = new Schema(
  {
    Tyoe: {
      type: String,
      required: true,
    },
    data: {
      type: Schema.Types.Mixed,
      required: true,
    },
    from_user: {
      type: String,
      required: true,
    },
    to_user: {
      type: String,
      required: true,
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
