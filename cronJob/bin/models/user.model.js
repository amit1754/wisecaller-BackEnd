"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const globalType_Model_1 = require("./globalType.Model");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { Schema, model } = mongoose;
const UserSchema = new Schema({
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
                ref: globalType_Model_1.globalTypeModel,
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
    active_subscriptions: [
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
}, { timestamps: true });
UserSchema.post("find", function (doc) {
    if (doc) {
        doc.map((x) => {
            x.profile_image =
                x.profile_image == null
                    ? null
                    : `${process.env.IMAGE_PATH}${x.profile_image}`;
            delete x.notification_token;
            delete x.notification_arn;
            if (x === null || x === void 0 ? void 0 : x.user_status) {
                delete x.user_status.status.logo;
                if (x === null || x === void 0 ? void 0 : x.user_status.status.sub_status) {
                    delete x.user_status.status.sub_status.logo;
                }
            }
            return x;
        });
    }
    return doc;
});
UserSchema.post("findOne", function (doc) {
    var _a, _b;
    if (doc) {
        delete doc.notification_token;
        delete doc.notification_arn;
        doc.profile_image =
            doc.profile_image == null
                ? null
                : `${process.env.IMAGE_PATH}${doc.profile_image}`;
        if (doc === null || doc === void 0 ? void 0 : doc.user_status) {
            delete doc.user_status.status.logo;
            if ((_b = (_a = doc === null || doc === void 0 ? void 0 : doc.user_status) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.sub_status) {
                delete doc.user_status.status.sub_status.logo;
            }
        }
    }
    return doc;
});
exports.User = mongoose.models.User || model("User", UserSchema);
