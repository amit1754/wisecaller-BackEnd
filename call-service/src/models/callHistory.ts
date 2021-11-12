import { Schema, model } from "mongoose";

const CallHistorySchema = new Schema(
    {
        wisecallerId:{
            type: Schema.Types.ObjectId,
            ref: "User",
            default:null
        },
        callerId:{
            type: Schema.Types.ObjectId,
            ref: "User",
            default:null
        },
        name:{
            type: Schema.Types.String,
        },
        number:{
            type: Schema.Types.String,
        },
     
        callHistory:[
            {
                time:{type:String},
                type:{type:String},
                simId:{type:String},
            }
        ],
      
        date:{
            type:Schema.Types.Number,
        }

    },
    { timestamps: true }
);

export const CallHistory = model("user_call_history", CallHistorySchema);