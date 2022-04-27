"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalTypeModel = void 0;
const mongoose_1 = require("mongoose");
const globalTypeSchema = new mongoose_1.Schema({
    type: {
        type: String,
    },
    order: {
        type: Number,
    },
}, { timestamps: true });
exports.globalTypeModel = (0, mongoose_1.model)("globaltypes", globalTypeSchema);
