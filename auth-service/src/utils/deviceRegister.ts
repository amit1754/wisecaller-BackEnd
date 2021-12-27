import { UserDevices } from "../models/user_devices";

import { fcmOperatios } from "./";
class DeviceRegister {
  public async addDevices(userDevices: any, userId: any) {
    const { device_token, OS, platform, deviceId } = userDevices;
    let arn = await fcmOperatios.RegisterToken(device_token);
    let existing_token = await UserDevices.findOne({
      user: userId,
      "user_device.device_token": device_token,
    }).lean();

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
      await UserDevices.findOneAndUpdate(
        { _id: existing_token._id },
        { ...updated_payload },
        { upsert: false, new: false }
      );
    } else {
      await UserDevices.deleteMany({ user: userId });
      let payload = {
        device_token,
        OS,
        platform,
        deviceId,
        arn,
      };
      let fpayload = { user: userId, user_device: payload };
      let devices = new UserDevices(fpayload);
      await devices.save();
    }
  }
}

export const device_register = new DeviceRegister();
