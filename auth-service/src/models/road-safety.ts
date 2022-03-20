import mongoose from "mongoose";

const RoadSafetySchema = new mongoose.Schema(
  {
    devices: [],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    selected_device: {
      type: String,
    },
    display_to: {
      type: String,
    },
    auto_sms: {
      type: Boolean,
      default: false,
    },
    notes: {
      notes_id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      is_custom: {
        type: Boolean,
      },
      text: {
        type: String,
      },
    },
    status: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

export const RoadSafety = mongoose.model("roadsafeties", RoadSafetySchema);
