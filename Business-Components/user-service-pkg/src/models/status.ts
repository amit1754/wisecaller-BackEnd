import { Schema, model } from "mongoose";
import { globalTypeModel } from "./globalType.Model";

const SatusSchema = new Schema(
  {
    status: {
      type: String,
    },
    logo: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    priority: {
      type: Number,
    },
    applicable_types: [
      {
        type: Schema.Types.ObjectId,
        ref: globalTypeModel,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

SatusSchema.post("aggregate", function (doc: any) {
  if (doc) {
    doc.map((x: any) => {
      delete x.logo;
      if (x.subCategory) {
        x.subCategory.map((y: any) => {
          delete y.logo;
          return y;
        });
      }
      return x;
    });
  }
  return doc;
});
SatusSchema.post("findOne", function (doc: any) {
  if (doc) {
    delete doc.logo;
  }

  return doc;
});
SatusSchema.post("find", function (doc) {
  if (doc) {
    doc.map((x: any) => {
      delete x.logo;
      return x;
    });
  }

  return doc;
});

export const UserStatus = model("UserSatus", SatusSchema);
