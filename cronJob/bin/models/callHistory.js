"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallHistory = void 0;
const mongoose_1 = require("mongoose");
const CallHistorySchema = new mongoose_1.Schema({
    call_history_id: {
        type: String,
    },
    phone: {
        type: String,
    },
    name: {
        type: String,
    },
    time: {
        type: Date,
    },
    call_type: {
        type: String,
        enum: ["INCOMING", "OUTGOING", "MISSED"],
    },
    sim: {
        type: String,
    },
    loggedin_user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.CallHistory = (0, mongoose_1.model)("user_call_history", CallHistorySchema);
