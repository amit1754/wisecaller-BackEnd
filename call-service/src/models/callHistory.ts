import { Schema, model } from "mongoose";

const CallHistorySchema = new Schema(
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

export const CallHistory = model("user_call_history", CallHistorySchema);