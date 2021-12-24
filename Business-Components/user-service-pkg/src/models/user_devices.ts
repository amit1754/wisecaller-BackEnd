import mongoose from "mongoose";

const User_device = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    user_device: {
      type: mongoose.Schema.Types.Mixed,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const UserDevices = mongoose.model("user_devices", User_device);
