import { Document, model, PaginateModel, Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const UserStatusSchema = new Schema(
  {
    status: {
      type: String,
    },
    logo: {
      type: String,
    },
    order: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
    },
    priority: {
      type: Number,
    },
    applicable_types: [
      {
        type: Schema.Types.ObjectId,
        ref: "GlobalTypes",
      },
    ],
    icon_style: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserStatusSchema.plugin(paginate);

interface UserStatusDocument extends Document {}

export const UserStatus = model<
  UserStatusDocument,
  PaginateModel<UserStatusDocument>
>("UserStatus", UserStatusSchema, "userstatus");
