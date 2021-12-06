// Load the AWS SDK for Node.js
import SNS from "aws-sdk/clients/sns";

import { PublishInput } from "aws-sdk/clients/sns";

const SNS_APPLICATION_ARN =
  "arn:aws:sns:us-east-1:208529951960:app/GCM/wisecaller-notification";
class NotificationController {
  async registerPushNotificationService(deviceToken: string): Promise<any> {
    console.log("register");
    try {
      if (SNS_APPLICATION_ARN) {
        var sns = new SNS({
          apiVersion: "latest",
          region: "us-east-1",
        });

        var params: SNS.Types.CreatePlatformEndpointInput = {
          PlatformApplicationArn: SNS_APPLICATION_ARN,
          Token: deviceToken,
        };

        const endpointResponse: any = await sns
          .createPlatformEndpoint(params)
          .promise();

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
  ): Promise<any> {
    try {
      const message = {
        GCM: JSON.stringify({
          data: {
            message: "user",
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
        return { publishTextPromise, messageId };
      } else {
        throw new Error("not snd");
      }
    } catch (ex) {
      console.log(
        `Failed to send push notification to the target arn:${targetArn}`,
        ex
      );
      return false;
    }
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
      var sns = new SNS({
        apiVersion: "latest",
        region: "us-east-1",
      });
      var publishTextPromise: any = await sns.publish(params).promise();
      return publishTextPromise;
    } catch (ex: any) {
      console.log(`Failed to send notification to sns`, ex);
      return null;
    }
  }
}

const notification = async () => {
  try {
    let token =
      "f_8U2g2f_RmRrv23-W2opp:APA91bFGeyZ2vYMDk_zcMS2MQGFCzZvGkpHqDhC7VAQintfXiQVIDomRmYCGcGGRAlaYsRsVYYt2BwXNzmOBx4mG2tnZKelsibEOJ6CzNdbsI_GPrOvf8iLBdXV_VvTBFOjz2x6tjaYj";
    const notiObj = new NotificationController();
    const arn = await notiObj.registerPushNotificationService(token);
    let sendNotification = await notiObj.sendPushNotification(arn, {
      data: "geka",
      notification: "asdas",
    });
    console.log("sendNotification", sendNotification);
    let deReg = await notiObj.deRegisterPushNotificationService(arn);
    console.log("deReg :>> ", deReg);
  } catch (ex: any) {
    console.error("dasdas", ex);
  }
};

notification();