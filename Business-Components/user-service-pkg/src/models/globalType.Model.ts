const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema,model } = mongoose;
const globalTypeSchema = new Schema(
  {
    type: {
      type: String,
    },
    order: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const globalTypeModel = mongoose.models.globalType|| model("globalType", globalTypeSchema);
