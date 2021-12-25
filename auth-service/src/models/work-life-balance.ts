import mongoose from "mongoose";

const WorkLifeBalanceSchema = new mongoose.Schema(
  {
    days: {
      type: mongoose.Schema.Types.Mixed,
      default: [
        {
          monday: true,
          tuesday: false,
          wednesday: false,
          thursday: true,
          friday: false,
          saturday: false,
          sunday: false,
        },
      ],
    },
    start_time: {
      type: String,
    },
    end_time: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserStatus",
    },
    sub_status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserSubStatus",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    excluded_dates: [],
  },
  { timestamps: true }
);

export const WorkLifeBalance = mongoose.model(
  "WorkLifeBalance",
  WorkLifeBalanceSchema
);
