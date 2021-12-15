import AWS from "aws-sdk";

class SNSClient {
  async publishToSNS(message: any) {
    try {
      let params = {
        Message: JSON.stringify(message),
        TopicArn: "",
      };

      AWS.config.update({ region: "us-east-1" });
      const sns = new AWS.SNS({ apiVersion: "latest" });
      let publish = await sns.publish(params).promise();
      return publish.MessageId;
    } catch (error: any) {
      throw new error(error);
    }
  }

  async pushNotification(targetArn: string, payload: any) {
    try {
      let message = {
        GCM: JSON.stringify({
          data: payload,
          notification: payload.notification,
        }),
      };

      let params = {
        MessageStructure: "json",
        Message: JSON.stringify(message),
        TargetArn: targetArn,
      };
      AWS.config.update({ region: "us-east-1" });
      const sns = new AWS.SNS({ apiVersion: "latest" });
      let publish = await sns.publish(params).promise();
      return publish.MessageId;
    } catch (error: any) {
      throw new error(error);
    }
  }
}

const snsClient = new SNSClient();
export default snsClient;
