import { Schema, model } from "mongoose";

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
        ref: "globalType",
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
  console.log(doc);
  doc.map((x: any) => {
    x.logo = x.logo == null ? null : `${process.env.IMAGE_PATH}${x.logo}`;
    if(x.subCategory){
      x.subCategory.map((y:any)=>{
        y.logo = x.logo == null ? null : `${process.env.IMAGE_PATH}${y.logo}`;
        return y;
      });
    }
    return x;
  });

  return doc;
});
SatusSchema.post("findOne", function (doc:any) {
  doc.logo =
    doc.logo == null
      ? null
      : `${process.env.IMAGE_PATH}${doc.logo}`;

  return doc;
});
SatusSchema.post("find", function (doc) {
  doc.map((x: any) => {
    x.logo =
      x.logo == null
        ? null
        : `${process.env.IMAGE_PATH}${x.logo}`;
    return x;
  });

  return doc;
});

export const UserStatus = model("UserSatus", SatusSchema);
