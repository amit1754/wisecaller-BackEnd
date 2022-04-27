"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSubscription = void 0;
const mongoose_1 = require("mongoose");
const UserSubscriptionSchema = new mongoose_1.Schema({
    subscription: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Subscription",
    },
    organization: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Organization",
    },
    coupon_code: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
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
});
exports.UserSubscription = (0, mongoose_1.model)("UserSubscription", UserSubscriptionSchema);
