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
    email: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization"
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

export const AuthToken = mongoose.models.AuthToken|| model("authtokens", AuthTokenSchema);
