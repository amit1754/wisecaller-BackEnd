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
      ref: "users",
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userstatus",
    },
    sub_status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usersubstatuses",
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
  "worklifebalances",
  WorkLifeBalanceSchema
);
