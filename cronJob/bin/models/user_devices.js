"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDevices = void 0;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema, model } = mongoose;
const User_device = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    user_device: {
        type: mongoose.Schema.Types.Mixed,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
exports.UserDevices = mongoose.models.user_devices || mongoose.model("user_devices", User_device);
