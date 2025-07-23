import mongoose, { Schema } from "mongoose";
const subscriptionSchema = new Schema(
    {
        subscriber:{
            type : mongoose.Schema.Types.ObjectId, // one of is subscribing
            ref : "User"
        },
        channel:
        {
             type : mongoose.Schema.Types.ObjectId, // one to whom subscribing
            ref : "User"
        }

    }
)

export const Subscription = mongoose.model("Subscription",subscriptionSchema)