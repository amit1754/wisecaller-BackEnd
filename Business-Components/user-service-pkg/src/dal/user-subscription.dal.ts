import { UserSubscription } from "../models/user-subscription";

export const UpdateUserSubscription = async (criteria, payload, options) => {
  return await UserSubscription.findOneAndUpdate(criteria, payload, options);
};
