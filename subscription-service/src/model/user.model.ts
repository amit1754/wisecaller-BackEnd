import { globalTypeModel } from "./globalType.Model";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      default: null,
    },
    last_name: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    secondary_no: {
      type: String,
      default: null,
    },
    phones: [
      {
        no: { type: String },
        used_for_login: { type: Boolean, default: false },
        type: { type: String },
      },
    ],

    profile_image: {
      type: String,
      default: null,
    },
    is_profile_from_social_media: {
      type: String,
      default: false,
    },
    media_profile_url: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER", "ORGANIZATION"],
      default: "USER",
    },
    devices: {
      type: Object,
      default: null,
    },
    is_new_user: {
      type: Boolean,
      default: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    user_status: {
      type: Schema.Types.Mixed,
    },
    modes: {
      workLifeBalance: {
        is_active: { type: Boolean, default: false },
        data: { type: Schema.Types.Mixed, default: null },
      },
      roadSafety: {
        is_active: { type: Boolean, default: false },
        devices: {
          type: Schema.Types.Mixed,
          default: null,
          ref: "globalTypeModel",
        },
        data: { type: Schema.Types.Mixed, default: null },
      },
      syncCalender: {
        calenders: { type: Schema.Types.Mixed, default: null },
        prioritize_calender_events: { type: Boolean },
        status: {
          type: Schema.Types.Mixed,
        },
      },
    },
    notification_token: {
      type: String,
    },
    notification_arn: {
      type: String,
    },
    organization_subscription: [
      {
        subscription: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Subscription",
        },
        organization: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Organization",
        },
        coupon_code: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        is_revoked: {
          type: Boolean,
          default: false,
        },
        revoked_reason: {
          type: String,
        },
        subscription_created_date: {
          type: Date,
        },
        subscription_end_date: {
          type: Date,
        },
        is_active: {
          type: Boolean,
          default: false,
        },
      },
    ],
    user_subscription: [
      {
        subscription: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Subscription",
        },
        organization: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Organization",
        },
        coupon_code: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        is_revoked: {
          type: Boolean,
          default: false,
        },
        revoked_reason: {
          type: String,
        },
        subscription_created_date: {
          type: Date,
        },
        subscription_end_date: {
          type: Date,
        },
        is_active: {
          type: Boolean,
          default: false,
        },
      },
    ],
    deactivate_reason: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.post("find", function (doc: any) {
  if (doc) {
    doc.map((x: any) => {
      x.profile_image =
        x.profile_image == null
          ? null
          : `${process.env.IMAGE_PATH}${x.profile_image}`;

      delete x.notification_token;
      delete x.notification_arn;
      if (x?.user_status) {
        delete x.user_status.status.logo;
        if (x?.user_status.status.sub_status) {
          delete x.user_status.status.sub_status.logo;
        }
      }

      return x;
    });
  }
  return doc;
});

UserSchema.post("findOne", function (doc: any) {
  if (doc) {
    delete doc.notification_token;
    delete doc.notification_arn;
    doc.profile_image =
      doc.profile_image == null
        ? null
        : `${process.env.IMAGE_PATH}${doc.profile_image}`;

    if (doc?.user_status) {
      delete doc.user_status.status.logo;
      if (doc?.user_status?.status?.sub_status) {
        delete doc.user_status.status.sub_status.logo;
      }
    }
  }
  return doc;
});

export const User = mongoose.models.users || model("users", UserSchema);
