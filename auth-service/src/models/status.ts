import { Schema, model } from "mongoose";
import { globalTypeModel } from "../models/globalType.Model";

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
    console.log("aff status");
    doc.map((x: any) => {
      delete x.logo;
      // x.logo = x.logo == null ? null : `${process.env.IMAGE_PATH}${x.logo}`;
      if (x.subCategory) {
        x.subCategory.map((y: any) => {
          console.log("before", y.logo);
          delete y.logo;
          // y.logo =
          //   y.logo == null || y.logo == undefined
          //     ? null
          //     : `${process.env.IMAGE_PATH}${y.logo}`;
          console.log("Aaa", y.logo);
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
    console.log("findone status");
    delete doc.logo;
    // doc.logo == null || doc.logo == undefined
    //   ? null
    //   : `${process.env.IMAGE_PATH}${doc.logo}`;
  }

  return doc;
});
SatusSchema.post("find", function (doc) {
  if (doc) {
    console.log("find status");
    doc.map((x: any) => {
      delete x.logo;
      // x.logo =
      //   x.logo == null || x.logo == undefined
      //     ? null
      //     : `${process.env.IMAGE_PATH}${x.logo}`;
      return x;
    });
  }

  return doc;
});

export const UserStatus = model("UserSatus", SatusSchema);
