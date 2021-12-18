import { UserContact } from "../../models/contactsync";
import { User } from "../../models/user";
import { UserDevices } from "../../models/user_devices";
import { NotificationModel } from "../../models/notification";
import snsClient from "../../utils/snsClient";
import { globalTypeModel } from "../../models/globalType.Model";
import { UserSubStatus } from "../../models/subStatus";

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
        case "CALL_BACK_REQUEST":
          this.callBackRequest(event);
          break;
        default:
          break;
      }
    } catch (error: any) {
      return false;
    }
  }

  async statusUpdateNotification(event: any) {
    try {
      let user_details = await User.findById(event.user_id);
      let data: any = {
        title: event.title,
        text: event.text,
        type: event.type,
        user: user_details,
      };

      if (event.send_all) {
        let where: any = [];
        if (data.user.phones) {
          for (let i = 0; i < data.user.phones.length; i++) {
            where.push({ "phones.ph_no": data.user.phones[i].no });
          }
        }

        let users = await UserContact.aggregate([
          { $match: { $and: where } },

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
              let payload = {
                data: {
                  ...data,
                  user: users[index],
                },
                notification: {
                  title: event.title,
                  body: event.user,
                  sound: "alarm",
                },
              };

              this.sendNotificationToUsers(userArn, payload);
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
              let payload = {
                data: {
                  ...data,
                },
                notification: {
                  title: event.title,
                  body: event.user,
                  sound: "alarm",
                },
              };
              this.sendNotificationToUsers(userArn, payload);
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async globalStatusUpdateNotifications(event: any) {
    let data: any = {
      title: event.title,
      text: event.text,
    };

    const global_status = await globalTypeModel.aggregate([
      { $match: {} },
      {
        $lookup: {
          from: "usersatus",
          localField: "_id",
          foreignField: "applicable_types",
          as: "global_statuses",
        },
      },
    ]);

    for (const [key, status] of Object.entries(global_status)) {
      for (const [key, global] of Object.entries(status.global_statuses)) {
        let temp: any = global;
        let sub = await UserSubStatus.find({ parentId: temp._id });
        Object.assign(global, { sub_status: sub });
      }
    }

    let users = await UserDevices.find({ is_active: true });
    for (let index = 0; index < users.length; index++) {
      if (users[index]?.user_device) {
        let payload = {
          data: {
            ...data,
            status: global_status,
            user: users[index],
          },
          notification: {
            title: event.title,
            body: event.user,
            sound: "alarm",
          },
        };
        let device = users[index].user_device;
        this.sendNotificationToUsers(device.arn, payload);
      }
    }
  }

  async customNotification(event: any) {
    let data = {
      ...event,
    };

    let users: any = [];

    if (event.send_all) {
      users = await UserDevices.find({ is_active: true });
      for (let index = 0; index < users.length; index++) {
        if (users[index]?.user_device) {
          let payload = {
            data: {
              ...data,
              user: users[index],
            },
            notification: {
              title: event.title,
              body: event.user,
              sound: "alarm",
            },
          };
          let device = users[index].user_device;
          this.sendNotificationToUsers(device.arn, payload);
        }
      }
    } else {
      users = await User.aggregate([
        { $match: { "phones.no": { $in: event.to } } },
        {
          $lookup: {
            from: "user_devices",
            localField: "_id",
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
        if (users[index]?.device?.user_device) {
          let payload = {
            data: {
              ...data,
              user: users[index],
            },
            notification: {
              title: event.title,
              body: event.user,
              sound: "alarm",
            },
          };
          let device = users[index].device.user_device;
          this.sendNotificationToUsers(device.arn, payload);
        }
      }
    }
  }

  async callBackRequest(event: any) {
    try {
      let users: any = await User.aggregate([
        { $match: { "phones.no": event.to } },
        {
          $lookup: {
            from: "user_devices",
            localField: "_id",
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

      if (users && users.length) {
        const user_contact: any = await UserContact.aggregate([
          {
            $match: {
              contact: users[0]._id,
              "phones.ph_no": {
                $in: event.user.phones.map((item: any) => item.no),
              },
            },
          },
        ]);

        let notification_payload = {
          type: event.type,
          from_user: event.user._id,
          to_user: users[0]._id,
          title: event.title,
          text: event.text,
        };

        let payload = {
          data: { user: event.user, contact: user_contact },
          notification: {
            title: event.title,
            body: event.user,
            sound: "alarm",
          },
        };

        let notification = new NotificationModel(notification_payload);
        await notification.save();

        await this.sendNotificationToUsers(
          users[0].device.user_device.arn,
          payload
        );
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  sendNotificationToUsers(userArn: string, data: any) {
    console.log(`Sending push notification to and targetArn: ${userArn}.`);
    snsClient.pushNotification(userArn, data);
  }
}

export default EventHandlerController;
