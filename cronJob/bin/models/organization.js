"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const OrganizationSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    address_details: {
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    gst: {
        type: String,
    },
    pan: {
        type: String,
    },
    contact_information: {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone_no: {
            type: String,
        },
    },
    website: {
        type: String,
    },
    role: {
        type: String,
        enum: ["ORGANIZATION", "ADMIN"],
        default: "ORGANIZATION",
    },
    subscription: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Subscription",
    },
    plan: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Plan",
    },
}, { timestamps: true });
OrganizationSchema.plugin(mongoose_paginate_v2_1.default);
exports.Organization = (0, mongoose_1.model)("Organization", OrganizationSchema, "organizations");
