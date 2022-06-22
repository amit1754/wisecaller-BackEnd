import { UserContact } from "../../models/contactsync";
import { User } from "../../models/user";
import { UserDevices } from "../../models/user_devices";
import { NotificationModel } from "../../models/notification";
import snsClient from "../../utils/snsClient";
import { globalTypeModel } from "../../models/globalType.Model";
import { UserSubStatus } from "../../models/subStatus";
import { getUserBll } from "@wisecaller/user-service";
import SnsService from "@wisecaller/sns";
class EventHandlerController {
  async index(event: any) {
    try {
      switch (event.type) {
        case "TRIGGER_STATUS":
          await this.sendStatusTrigger(event);
          break;
        case "STATUS_UPDATE":
          await this.statusUpdateNotification(event);
          break;
        case "GLOBAL_STATUS_UPDATE":
          await this.globalStatusUpdateNotifications(event);
          break;
        case "CUSTOM_NOTIFICATION":
          await this.customNotification(event);
          break;
        case "CALL_BACK_REQUEST":
          await this.callBackRequest(event);
          break;
        default:
          break;
      }
    } catch (error) {
      return false;
    }
  }

  async sendStatusTrigger(event: any) {
    try {
      var triggerData = event.data;
      let userDevices = await getUserBll.findUserDeviceById(triggerData.user);
      let data: any = {
        type: event.type,
        data: triggerData,
      };
      if (userDevices) {
        for (let index = 0; index < userDevices.length; index++) {
          if (userDevices[index]?.is_active) {
            let device = userDevices[index];
            let userArn = device?.user_device?.arn;
            let payload = {
              data: {
                ...data,
              },
              notification: {
                type: "SILENT",
                sound: process.env.SOUND,
              },
            };
            await this.sendNotificationToUsers(userArn, payload);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async statusUpdateNotification(event: any) {
    try {
      let user_details = await getUserBll.findUserById(event.user_id);
      let data: any = {
        title: event.title,
        text: event.text,
        type: event.type,
      };

      if (event.send_all) {
        let where: any = [];
        if (user_details.phones) {
          for (let i = 0; i < user_details.phones.length; i++) {
            where.push({ "phones.ph_no": user_details.phones[i].no });
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
              localField: "contact",
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
              let payloadNotification = {
                contactId: users[index].contactId,
                phones: [...users[index].phones],
                status: user_details.user_status,
              };
              let payload = {
                data: {
                  ...data,
                  user: payloadNotification,
                },
                notification: {
                  title: event.title,
                  body: "Status Updated",
                  type: "SILENT",
                  sound: process.env.SOUND,
                },
              };

              await this.sendNotificationToUsers(userArn, payload);
            }
          }
        }
      } else {
        let userContactFind: any = await UserContact.find({
          "phones.ph_no": { $in: event.to },
        });
        if (userContactFind) {
          for (let i = 0; i < userContactFind.length; i++) {
            let userDevice: any = await UserDevices.find({
              user: userContactFind[i].contact,
              is_active: true,
            });
            let payloadNotification = {
              contactId: userContactFind[i].contactId,
              phones: [...userContactFind[i].phones],
              status: user_details.user_status,
            };
            for (let i = 0; i < userDevice.length; i++) {
              let userArn = userDevice[i]?.user_device?.arn;
              let payload = {
                data: {
                  ...data,
                  user: payloadNotification,
                },
                notification: {
                  title: event.title,
                  body: event.user,
                  type: "SILENT",
                  sound: process.env.SOUND,
                },
              };
              await this.sendNotificationToUsers(userArn, payload);
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
          from: "userstatus",
          localField: "_id",
          foreignField: "applicable_types",
          as: "global_statuses",
        },
      },
    ]);

    for (const [key, status] of Object.entries<any>(global_status)) {
      for (const [key, global] of Object.entries(status.global_statuses)) {
        let temp: any = global;
        let sub = await UserSubStatus.find({ parentId: temp._id });
        Object.assign(temp, { sub_status: sub });
      }
    }

    let users: any = await UserDevices.find({ is_active: true });
    for (let index = 0; index < users.length; index++) {
      if (users[index]?.user_device) {
        let payload = {
          data: {
            ...data,
            status: global_status,
          },
          notification: {
            title: event.title,
            body: "Global Status Updated",
            type: "SILENT",
            sound: process.env.SOUND,
          },
        };
        let device = users[index].user_device;
        await this.sendNotificationToUsers(device.arn, payload);
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
              body: event.text,
              type: event.type,
              sound: process.env.SOUND,
            },
          };
          let device = users[index].user_device;
          await this.sendNotificationToUsers(device.arn, payload);
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
            },
            notification: {
              title: event.title,
              body: event.text,
              type: event.type,
              sound: process.env.SOUND,
            },
          };
          let device = users[index].device.user_device;
          await this.sendNotificationToUsers(device.arn, payload);
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
        if (user_contact && user_contact.length) {
          // let notification_payload = {
          //   type: event.type,
          //   from_user: event.user._id,
          //   to_user: users[0]._id,
          //   title: event.title,
          //   text: event.text,
          // };
          let payloadNotification = {
            contactId: user_contact[0].contactId,
            phones: { ...user_contact[0].phones },
          };

          let payload = {
            data: { contact: payloadNotification },
            notification: {
              title: event.title,
              body: event.text,
              type: event.type,
              sound: process.env.SOUND,
            },
          };

          //let notification = new NotificationModel(notification_payload);
          //await notification.save();

          await this.sendNotificationToUsers(
            users[0].device.user_device.arn,
            payload
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async sendNotificationToUsers(userArn: string, data: any) {
    console.log(`Sending push notification to and targetArn: ${userArn}.`);
    await SnsService.sendPushNotification(userArn, data);
  }
}

export default EventHandlerController;
