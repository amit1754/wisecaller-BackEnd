import { Schema, model } from "mongoose";

const SatusSchema = new Schema(
    {
        status: {
            type: String,
        },
        logo: {
            type: String,
        },
     
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const UserStatus = model("UserSatus", SatusSchema);
