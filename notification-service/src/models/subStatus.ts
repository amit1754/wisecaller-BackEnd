const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema, model } = mongoose;
const SatusSubSchema = new Schema(
  {
    status: {
      type: String,
    },
    logo: {
      type: String,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "userstatus",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserSubStatus =
  mongoose.models.usersubstatus || model("usersubstatus", SatusSubSchema);
