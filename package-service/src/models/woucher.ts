import { Schema, model } from "mongoose";

const DiscountSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            comment: "if flat consider as amount otherwise persantage"
        },
        discountType: {
            type: String,
            enum: ['FLAT', 'PERSANTAGE'],
            default: 'PERSANTAGE'
        },
        minAmount: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        }

    },
    { timestamps: true }
);

export const Woucher = model("Woucher", DiscountSchema);
