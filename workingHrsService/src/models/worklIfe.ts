import { Schema, model } from "mongoose";

const WorkLifeSchema = new Schema(
  {
    Monday: {
      type: Boolean,
      default: false,
    },
    Tuesday: {
      type: Boolean,
      default: false,
    },
    Wednesday: {
      type: Boolean,
      default: false,
    },
    Thursday: {
      type: Boolean,
      default: false,
    },
    Friday: {
      type: Boolean,
      default: false,
    },
    Saturday: {
      type: Boolean,
      default: true,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    userStatus: {
      type: Schema.Types.ObjectId,
      ref: "UserStatus",
      default: null,
    },
    userSubStatus: {
      type: Schema.Types.ObjectId,
      ref: "UserSubStatus",
      default: null,
    },
    Excluded_dates: {
      type: Object,
    },
  },
  { timestamps: true }
);

export const WorkLife = model("WorkLife", WorkLifeSchema);
