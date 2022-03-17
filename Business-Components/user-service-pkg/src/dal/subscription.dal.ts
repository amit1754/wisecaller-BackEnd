import { Subscription } from "../models/subscription";

export const getFreeSubscripion = async () => {
  return await Subscription.findOne({ type: "FREE" });
};

export const getSubscriptionById = async(id)=>{
  return await Subscription.findById(id);
}
