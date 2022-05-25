const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema,model } = mongoose;

const customStatusSchema = new Schema(
  {
    custom_name: { type: String },
    customId: { type: String },
    start_date: { type: Date },
    end_date: { type: Date },
    is_allday_status: { type: Boolean, default: false },
    RRULE:  { type: Object },
    has_processed: { type: Boolean, default: false },
    time_zone: { type: String },
    status: {
      type: Schema.Types.ObjectId,
      ref: "UserSatus",
      default: null,
    },
    substatus: {
      type: Schema.Types.ObjectId,
      ref: "UserSubStatus",
      default: null,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    notes: {
      is_custom: { type: String },
      text: { type: String },
    },
    display_to: {
      type: String,
    },
    auto_sms: { type: Boolean, default: false },
    Excluded_dates: { type: Object, default: null },
  },

  { timestamps: true }
);

export const customStatus = mongoose.models.customStatus|| model("customStatus", customStatusSchema);
