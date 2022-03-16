
import "@wisecaller/mongo";
import UserBLL from "./bll/user.bll";
import AuthTokenBLL from "./bll/authToken.bll";
import StatusBLL from "./bll/status.bll";
import UserSubscriptionBLL from "./bll/user-subscription.bll";

export const getUserBll = new UserBLL();
export const getauthTokenBll = new AuthTokenBLL();
export const getStatusBll = new StatusBLL();
export const getUserSubscriptionBll = new UserSubscriptionBLL();
