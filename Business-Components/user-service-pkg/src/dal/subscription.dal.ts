import { Subscription } from "../models/subscription";

export const getFreeSubscripion = async () => {
  return await Subscription.findOne({ type: "FREE" });
};
