import { UserContact } from "../../models/contactsync";
import { UserDevices } from "../../models/user_devices";
import snsClient from "../../utils/snsClient";

class EventHandlerController {
  async index(event: any) {
    try {
      switch (event.type) {
        case "STATUS_UPDATE":
          this.statusUpdateNotification(event);
          break;
        case "GLOBAL_STATUS_UPDATE":
          this.globalStatusUpdateNotifications(event);
          break;
        case "CUSTOM_NOTIFICATION":
          this.customNotification(event);
          break;
        default:
          break;
      }
    } catch (error: any) {
      return false;
    }
  }

  async statusUpdateNotification(event: any) {
    let data: any = {
      title: event.title,
      text: event.text,
    };

    if (event.send_all) {
      let users = await UserContact.aggregate([
        { $match: { "phones.no": event.user.phones.ph_no } },
        {
          $lookup: {
            from: "users",
            localField: "phones.ph_no",
            foreignField: "phones.no",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "user_devices",
            localField: "user._id",
            foreignField: "user",
            as: "device",
          },
        },
        {
          $unwind: {
            path: "$device",
            preserveNullAndEmptyArrays: true,
          },
        },
      ]);

      for (let index = 0; index < users.length; index++) {
        if (users[index]?.device) {
          if (users[index]?.device.is_active) {
            let device = users[index];
            let userArn = device?.device?.user_device?.arn;

            this.sendNotificationToUsers(userArn, data);
          }
        }
      }
    } else {
      let userContactFind = await UserContact.find({
        "phones.ph_no": { $in: event.to },
      });
      if (userContactFind) {
        for (let i = 0; i < userContactFind.length; i++) {
          let userDevice = await UserDevices.find({
            user: userContactFind[i].contact,
            is_active: true,
          });
          for (let i = 0; i < userDevice.length; i++) {
            let userArn = userDevice[i]?.user_device?.arn;
            this.sendNotificationToUsers(userArn, data);
          }
        }
      }
    }
  }

  async globalStatusUpdateNotifications(event: any) {
    let data: any = {
      title: event.title,
      text: event.text,
    };
    let users = await UserDevices.find({ is_active: true });
    for (let index = 0; index < users.length; index++) {
      if (users[index]?.user_device) {
        let device = users[index].user_device;
        this.sendNotificationToUsers(device.arn, data);
      }
    }
  }

  async customNotification(event: any) {
    let data: any = {
      title: event.title,
      text: event.text,
    };

    let userContactFind = await UserContact.find({
      "phones.ph_no": { $in: event.to },
    });
    if (userContactFind) {
      for (let i = 0; i < userContactFind.length; i++) {
        let saveData: any = {
          type: event.type,
          data,
          from_user: event.user,
          to_user: userContactFind[i]._id,
          title: event.title,
          text: event.text,
        };

        let userDevice = await UserDevices.find({
          user: userContactFind[i].contact,
          is_active: true,
        });
        for (let i = 0; i < userDevice.length; i++) {
          let userArn = userDevice[i]?.user_device?.arn;
          this.sendNotificationToUsers(userArn, data);
        }
      }
    }
  }

  sendNotificationToUsers(userArn: string, data: any) {
    console.log(`Sending push notification to and targetArn: ${userArn}.`);
    snsClient.pushNotification(userArn, data);
  }
}

export default EventHandlerController;
