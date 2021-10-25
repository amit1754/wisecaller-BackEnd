import { Schema, model } from "mongoose";

const CmsSchema = new Schema(
    {
        pageName: {
            type: String,
            unique: true,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },



    },
    { timestamps: true }
);

export const CmsModel = model("Cms", CmsSchema);
