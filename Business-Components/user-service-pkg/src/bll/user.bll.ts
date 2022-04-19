import * as userdal from "../dal/user.dal";
import { globalTypeModel } from "../models/globalType.Model";
import StatusBLL from "./status.bll";
import UserSubscriptionBLL from "./user-subscription.bll";

export const statusBLL = new StatusBLL();
export const userSubscriptionBll = new UserSubscriptionBLL();
export default class UserBLL {
  async createUser(payload: any): Promise<any> {
    let user = await userdal.createUser(payload);
    await userSubscriptionBll.createUserSubscrption(user._id);
    return user;
  }

  async findUserByPhone(mobileNo: any): Promise<any> {
    let user = await userdal.getUserByPhone(mobileNo);
    return user;
  }

  async findUserByPayload(payload: any): Promise<any> {
    let user = await userdal.getUserByPayload(payload);
    return user;
  }

  async findOneUserLean(payload: any): Promise<any> {
    let user = await userdal.findOneUserLean(payload);
    return user;
  }

  async findOneUser(payload: any): Promise<any> {
    let user = await userdal.findOneUser(payload);
    return user;
  }

  async getUserByPhoneAndId(id: any, mobileNo: any): Promise<any> {
    let user = await userdal.getUserByPhoneAndId(id, mobileNo);
    return user;
  }

  async findUserById(id: any): Promise<any> {
    let user = await userdal.getUserById(id);
    return user;
  }
  async findOneAndUpdate(id: any, obj: any, options: any): Promise<any> {
    let user = await userdal.findOneAndUpdate(id, obj, options);
    return user;
  }

  async findUserDeviceById(id: any): Promise<any> {
    let user = await userdal.findUserDeviceById(id);
    return user;
  }

  async findOneAndRemoveById(id: any): Promise<void> {
    await userdal.findOneAndRemoveById(id);
  }

  async findOneDeviceByTokenById(id: any, token: any): Promise<any> {
    return await userdal.findOneDeviceByTokenById(id, token);
  }

  async findOneDeviceAndUpdateById(
    id: any,
    payload: any,
    options: any
  ): Promise<void> {
    await userdal.findOneDeviceAndUpdateById(id, payload, options);
  }
  async createUserDevice(payload: any): Promise<any> {
    return await userdal.createUserDevice(payload);
  }
  async removeUserDevice(payload: any) {
    return await userdal.removeUserDevice(payload);
  }

  async getAllUser() {
    return await userdal.getuser();
  }
  async getUserDetails(id: any) {
    let user: any = await userdal.getUserById(id);
    if (user?.user_status?.status?.applicable_types) {
      user.user_status.status.applicable_types = await globalTypeModel.find({
        _id: { $in: user?.user_status?.status?.applicable_types },
      });
    }

    if (user?.modes?.workLifeBalance?.data) {
      let data = user?.modes?.workLifeBalance?.data;
      let status = await statusBLL.getStatusById(data.status);
      let sub_status = await statusBLL.getSubstatusById(data.sub_status);
      user.modes.workLifeBalance.data.status = status;
      user.modes.workLifeBalance.data.sub_status = sub_status;
    }

    if (user?.modes?.roadSafetyStatus?.data?.status?.applicable_types) {
      user.modes.roadSafetyStatus.data.status.applicable_types =
        await globalTypeModel.find({
          _id: {
            $in: user?.modes?.roadSafetyStatus?.data?.status?.applicable_types,
          },
        });
    }

    if (user?.user_status?.status?.status_notes?.id) {
      let notesData = await statusBLL.getNotesById(
        user?.user_status?.status?.status_notes?.id
      );
      if (notesData) {
        user.user_status.status.status_notes.notes = notesData;
      }
    }

    if (user?.active_subscriptions?.length) {
      for (const user_subscription of user?.active_subscriptions) {
        if (user_subscription?.subscription) {
          let subscription = await userSubscriptionBll.getSubscription(
            user_subscription?.subscription
          );
          user_subscription.subscription = subscription;
        }
      }
    }
    return user;
  }
}
