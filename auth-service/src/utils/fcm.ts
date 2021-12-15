import SNS from "aws-sdk/clients/sns";

const SNS_APPLICATION_ARN =
  "arn:aws:sns:us-east-1:208529951960:app/GCM/wisecaller-notification";
class FCMData {
  async RegisterToken(token: string) {
    try {
      if (SNS_APPLICATION_ARN) {
        var sns = new SNS({
          apiVersion: "latest",
          region: "us-east-1",
        });

        var params: SNS.Types.CreatePlatformEndpointInput = {
          PlatformApplicationArn: SNS_APPLICATION_ARN,
          Token: token,
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
      return false;
    }
  }
  async deRegisterToken(targetArn: string) {
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
      return null;
    }
  }
  async sendPushNotification(
    targetArn: any,
    pushData: { data: any; notification: any }
  ) {
    try {
      const message = {
        GCM: JSON.stringify({
          data: {
            message: "user has changes status",
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
      return false;
    }
  }
}

export const fireBaseOperation = new FCMData();
