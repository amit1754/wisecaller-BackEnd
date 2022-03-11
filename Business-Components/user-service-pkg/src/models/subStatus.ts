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
      ref: "UserStatus",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
  mongoose.models.UserSubStatus || model("UserSubStatus", SatusSubSchema);
