import { Types } from "mongoose";

import { Request, Response } from "express";
import { UserSubscription } from "../models/user_subscription";
import SnsService from "@wisecaller/sns";
import { UserDevices } from "../models/user_devices";
import { Organization } from "../models/organization";
import emailClient from "@wisecaller/email";

import moment from "moment";
class SubscriptionController {
  async NotifyUser(request: Request, response: Response) {
    try {
      let days = process.env.SUBSCRIPTIONDAY;
      let startDate = moment().minutes(0).seconds(0).milliseconds(0);
      let endDate = moment().add(5, "d").minutes(0).seconds(0).milliseconds(0);
      const allSubscription = await UserSubscription.find({
        subscription_end_date: {
          $gt: startDate.toISOString(),
          $lt: endDate.toISOString(),
        },
      }).populate("user");
      let message = "your subscription end in 5 days";
      let emailContent: any = message;
      let subject: any = process.env.SUBSCRIPTIONSUBJECT;

      for (let i = 0; i < allSubscription.length; i++) {
        if (allSubscription[i]?.organization) {
          let organazationDetails = await Organization.findById(
            new Types.ObjectId(allSubscription[i]?.organization)
          );

          let messageDetails = {
            subscription_created_date:
              allSubscription[i].subscription_created_date,
            subscription_end_date: allSubscription[i].subscription_end_date,
            organazationDetails: {
              OrganizationName: organazationDetails?.name,
              OrganizationEmail: organazationDetails?.email,
              organazationWebsite: organazationDetails?.website,
              organazationphone_no: organazationDetails?.phone_no,
            },
          };

          let userToken = await UserDevices.find({
            user: allSubscription[i].user._id,
            is_active: true,
          });
          if (userToken) {
            let payload: any = {
              notification: {
                title: "subscription end",
                sound: process.env.SOUND,
              },
            };
            await SnsService.sendPushNotification(userToken[0].arn, payload);
          }
          await emailClient.Send(
            allSubscription[i].email,
            subject,
            emailContent
          );
        }
      }

      response.status(200).json({ success: true, message: "success" });
    } catch (err) {
      console.log("err :>> ", err);
      response.status(500).json({ success: false, message: "failed" });
    }
  }
}
export default SubscriptionController;
