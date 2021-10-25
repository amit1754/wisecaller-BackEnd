import { Schema, model } from "mongoose";

const SatusSchema = new Schema(
    {
        status: {
            type: String,
        },
        parentId: {
            type:Schema.Types.ObjectId,
            ref: "UserSatus",
            default:null
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const UserStatus = model("UserSatus", SatusSchema);
