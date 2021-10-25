import { Schema, model } from "mongoose";

const CalenderSyncSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        calenderEvent: {
            type: Object,
            required: true
        },
        email: {
            type: String,
        },
    },
    { timestamps: true }
);

export const UserCalender = model("user_calender", CalenderSyncSchema);
