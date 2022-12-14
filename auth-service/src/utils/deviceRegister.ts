import {getUserBll} from "@wisecaller/user-service";
import SNSClient from "@wisecaller/sns";

class DeviceRegister {
  public async addDevices(userDevices: any, userId: any) {
    const { device_token, OS, platform, deviceId } = userDevices;
    let arn = await SNSClient.registerPushNotificationService(device_token);
    let existing_token = await getUserBll.findOneDeviceByTokenById(userId,device_token);

    if (existing_token) {
      let updated_payload = {
        ...existing_token,
        user_device: {
          device_token,
          OS,
          platform,
          deviceId,
          arn,
        },
      };
      await getUserBll.findOneDeviceAndUpdateById(existing_token._id , { ...updated_payload } ,{ upsert: false, new: false });
    } else {
      // await UserDevices.deleteMany({ user: userId });
      let payload = {
        device_token,
        OS,
        platform,
        deviceId,
        arn,
      };
      let fpayload = { user: userId, user_device: payload };
      let devices = await getUserBll.createUserDevice(fpayload);
    }
  }
}

export const device_register = new DeviceRegister();
