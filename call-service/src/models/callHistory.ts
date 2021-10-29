import { Schema, model } from "mongoose";

const CallHistorySchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        callLogs: [
            {
                dateId:{
                    type:Date
                },
                callList:[
                    {
                        wiseCallerId:{type: Schema.Types.ObjectId,ref: "User",default:null},
                        phoneNumber:{type: String},
                        name:{type: String,default:null},
                        callType:{type: String},
                        time:{type: String},
                        message:{type: String},
                        simId:{type: String},
                        status:{type: String},
                    }
                ]
            }
        ]
    },
    { timestamps: true }
);

export const CallHistory = model("user_call_history", CallHistorySchema);