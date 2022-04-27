"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customStatus = void 0;
const mongoose_1 = require("mongoose");
const customStatusSchema = new mongoose_1.Schema({
    custom_name: { type: String },
    customId: { type: String },
    start_date: { type: Date },
    end_date: { type: Date },
    is_allday_status: { type: Boolean, default: false },
    RRULE: { type: String },
    time_zone: { type: String },
    status: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "UserStatus",
        default: null,
    },
    substatus: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "UserSubStatus",
        default: null,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    notes: {
        is_custom: { type: String },
        text: { type: String },
        noteId: { type: mongoose_1.Schema.Types.ObjectId, default: null }, //ref of notes
    },
    display_to: {
        type: String,
        enum: ["CONTACT", "ALL"],
        default: "CONTACT",
    },
    auto_sms: { type: Boolean, default: false },
    is_enabled: {
        type: Boolean,
        default: true,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.customStatus = (0, mongoose_1.model)("customStatus", customStatusSchema);
