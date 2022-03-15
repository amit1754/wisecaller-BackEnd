import moment from "moment";
import * as subscriptionDal from "../dal/subscription.dal";
import * as userSubscriptionDal from "../dal/user-subscription.dal";
import { getUserBll } from "../";

export default class UserSubscriptionBLL {
  async createUserSubscrption(user_id: string) {
    let freeSubscription = await subscriptionDal.getFreeSubscripion();
    let payload = {
      subscription: freeSubscription._id,
      quantity: 1,
      user: user_id,
      subscription_created_date: moment().toISOString(),
      subscription_end_date: moment()
        .add(freeSubscription.duration, "months")
        .toISOString(),
    };

    let user_subscription = await userSubscriptionDal.UpdateUserSubscription(
      { user: user_id, organization: { $exists: false } },
      payload,
      { upsert: true, new: true }
    );

    await getUserBll.findOneAndUpdate(
      user_id,
      { user_subscription: user_subscription },
      { upsert: true, new: true }
    );

    return user_subscription;
  }
}
