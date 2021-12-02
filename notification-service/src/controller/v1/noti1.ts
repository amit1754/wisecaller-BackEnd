// Load the AWS SDK for Node.js
import SNS from "aws-sdk/clients/sns";

import { PublishInput } from "aws-sdk/clients/sns";

const SNS_APPLICATION_ARN =
  "arn:aws:sns:us-east-1:208529951960:app/GCM/wisecaller-push-notification";
class NotificationController {
  async registerPushNotificationService(deviceToken: string): Promise<any> {
    try {
      if (SNS_APPLICATION_ARN) {
        var sns = new SNS({
          apiVersion: "latest",
          region: "us-east-1",
        });
        console.log("pass1");
        var params: SNS.Types.CreatePlatformEndpointInput = {
          PlatformApplicationArn: SNS_APPLICATION_ARN,
          Token: deviceToken,
        };

        const endpointResponse: any = await sns
          .createPlatformEndpoint(params)
          .promise();
        console.log("pass1", endpointResponse);
        return endpointResponse.EndpointArn;
      } else {
        throw new Error(
          "Environment variable 'SNS_APPLICATION_ARN' is not defined."
        );
      }
    } catch (ex) {
      console.log(
        `Failed to send push notification to the device token:${deviceToken}`,
        ex
      );
      return false;
    }
  }

  async deRegisterPushNotificationService(targetArn: string): Promise<any> {
    try {
      var sns = new SNS({
        apiVersion: "latest",
        region: "us-east-1",
      });
      var params: SNS.Types.DeleteEndpointInput = {
        EndpointArn: targetArn,
      };
      const endpointResponse = await sns.deleteEndpoint(params).promise();
      return endpointResponse;
    } catch (ex) {
      console.log(`Failed to deregister the endpoint:${targetArn}`, ex);
      return null;
    }
  }

  async sendPushNotification(
    targetArn: any,
    pushData: { data: any; notification: any }
  ): Promise<boolean> {
    try {
      const message = {
        GCM: JSON.stringify({
          data: pushData.data,
          notification: {
            title: "this one last test in app",
            body: "mm hello tests",
          },
        }),
      };

      const params = {
        MessageStructure: "json",
        Message: JSON.stringify(message),
        TargetArn: targetArn,
      };

      var sns = new SNS({
        apiVersion: "latest",
        region: "us-east-1",
      });
      var publishTextPromise = await sns.publish(params).promise();
      const messageId: any = publishTextPromise?.MessageId;
      if (messageId) {
        console.log("Message published: ", messageId);
      } else {
        console.log("Message publish failed.");
      }

      return true;
    } catch (ex) {
      console.log(
        `Failed to send push notification to the target arn:${targetArn}`,
        ex
      );
      return false;
    }
  }

  async publishEvent(event: any) {
    await this.publishToSNS(event, process.env.SNS_TOPIC_EVENT_ARN);
  }

  async publishMessagingEvent(messagingEvent: any) {
    await this.publishToSNS(
      messagingEvent,
      process.env.SNS_TOPIC_MESSAGING_EVENT_ARN
    );
  }

  async publishToSNS(
    message: any,
    topicArn: string | undefined,
    messageAttributes: any = null
  ): Promise<any> {
    let params: PublishInput = {
      Message: JSON.stringify(message) /* required */,
      TopicArn: topicArn,
      MessageAttributes: messageAttributes,
    };

    try {
      console.log("published message", JSON.stringify(params));
      var sns = new SNS({
        apiVersion: "latest",
        region: "us-east-1",
      });
      var publishTextPromise: any = await sns.publish(params).promise();
      return publishTextPromise.MessageId;
    } catch (ex: any) {
      console.log(`Failed to send notification to sns`, ex);
      return null;
    }
  }
}

const myPromise = new Promise((resolve: any, reject: any) => {
  let token =
    "eXIckAUHQmW8vbGK32QDsx:APA91bHf1m_mZYd_ORKt_o1i_EslJERrKU4hv00zxr_HYlcYIwiXMOdTCMoi-NXrB9YTR4p1G3UnS7FD87W6_Mtp7lTDdNNXX-AMlYDUHTWdjAjhtLPQy5muN3E5I1mo8MjyAk7QBcrp";
  const notiObj = new NotificationController();
  let a: any = notiObj
    .registerPushNotificationService(token)
    .then((res: any) => {
      console.log("res :>> ", res);
      let arn =
        "arn:aws:sns:us-east-1:208529951960:endpoint/GCM/wisecaller-push-notification/6ec7287d-ea29-38bf-80f6-f36a9e3e1cef";
      let b = notiObj
        .sendPushNotification(arn, {
          data: "aaaa",
          notification: "asdas",
        })
        .then((res2) => {
          console.log("res2", res2);
        });
    });
  console.log(a);
});
