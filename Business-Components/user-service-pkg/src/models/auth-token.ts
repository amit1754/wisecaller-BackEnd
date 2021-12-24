const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema,model } = mongoose;

const AuthTokenSchema = new Schema(
  {
    otp: {
      type: Number,
    },
    mobileNo: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    expiresAt: {
      type: Date,
      default: Date.now(),
      index: { expires: "10m" },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const AuthToken = mongoose.models.AuthToken|| model("AuthToken", AuthTokenSchema);
