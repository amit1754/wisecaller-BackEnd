import { Schema, model } from "mongoose";

const PackagesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },

    },
    { timestamps: true }
);

export const Packages = model("Packages", PackagesSchema);
