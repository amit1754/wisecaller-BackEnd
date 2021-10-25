import { Schema, model } from "mongoose";

const PaymentSchema = new Schema(
    {
        paymentId: {
            type: String,
            required: true,
            unique: true
        },
        status: {
            type: String,
            enum: ['SUCCESS', 'FAILED'],
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        paymentObj: {
            type: Object,
            required: true,
        },
        packageId: {
            type: Schema.Types.ObjectId,
            ref: "Packages",
        },


    },
    { timestamps: true }
);

export const PaymentModel = model("Payment", PaymentSchema);
