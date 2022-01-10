"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalTypeModel = void 0;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Schema, model } = mongoose;
const globalTypeSchema = new Schema({
    type: {
        type: String,
    },
    order: {
        type: Number,
    },
}, { timestamps: true });
exports.globalTypeModel = mongoose.models.globalType || model("globalType", globalTypeSchema);
