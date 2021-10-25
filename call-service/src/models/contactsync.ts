import { Schema, model } from "mongoose";

const ContactSyncSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        contact: {
            type: Object,
            required: true
        },
    },
    { timestamps: true }
);

export const UserContact = model("user_contact", ContactSyncSchema);