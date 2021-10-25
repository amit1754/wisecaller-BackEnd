import { Schema, model } from "mongoose";

const ContactUsSchema = new Schema(
    {
        email: {
            type: String,
        },
        Message: {
            type: String,
        },
    },

    { timestamps: true }
);

export const ContactUs = model("ContactUs", ContactUsSchema);
