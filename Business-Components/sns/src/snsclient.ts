// Load the AWS SDK for Node.js
import SNS from "aws-sdk/clients/sns";
import { PublishInput } from 'aws-sdk/clients/sns';

export default class SNSClient {
  static hasConfigurations() {
    const configurations = [
      'FCM_SNS_APPLICATION_ARN',
      'EVENT_PROCESSOR_TOPIC_ARN',
      'SNS_REGION'
    ];

    configurations.forEach(config => {
      if (!(config in process.env)) {
        throw new Error(`Environment variable ${config} is not defined.`);
      }
    });
  }

  static async sendOTP (mobileNo, otp) {
    let sendOTP: boolean =  (process.env.MESSAGE_SEND !=null && process.env.MESSAGE_SEND == 'true') ? true : false;
    if (sendOTP) {
      await this.sendSMS(mobileNo,`Your verification message is ${otp}`);
    }
  }


  static async sendSMS (mobileNo, message) {
    let sendOTP: boolean =  (process.env.MESSAGE_SEND !=null && process.env.MESSAGE_SEND == 'true') ? true : false;
    if (sendOTP) {
    var params = {
      Message: message,
      PhoneNumber: mobileNo,
      MessageAttributes: {
        "AWS.SNS.SMS.SenderID": {
          DataType: "String",
          StringValue: "wisecaller",
        },
      },
    };
  
    var publishTextPromise = new SNS({ apiVersion: "2010-03-31" })
      .publish(params)
      .promise();
  
    publishTextPromise
      .then(function (data) {
        return true;
      })
      .catch(function (err) {
        return false;
      });
    }
  }
  
  static async registerPushNotificationService(deviceToken: string): Promise<string> {
    try {
      if (process.env.FCM_SNS_APPLICATION_ARN) {
        var sns = new SNS({ apiVersion: 'latest', region: process.env.SNS_REGION });
        var params: SNS.Types.CreatePlatformEndpointInput = {
          PlatformApplicationArn: process.env.FCM_SNS_APPLICATION_ARN,
          Token: deviceToken,
        };

        const endpointResponse = await sns.createPlatformEndpoint(params).promise();
        return endpointResponse.EndpointArn;
      } else {
        throw new Error("Environment variable 'FCM_SNS_APPLICATION_ARN' is not defined.");
      }
    } catch (ex) {
      console.log(`Failed to registerthe device for push:${deviceToken}`, ex);
      return null;
    }
  }

  static async deRegisterPushNotificationService(targetArn : string) : Promise<any> {
    try{
        var sns = new SNS({ apiVersion: 'latest', region: process.env.SNS_REGION });
        var params : SNS.Types.DeleteEndpointInput = {
            EndpointArn :targetArn
        }
        const endpointResponse  = await sns.deleteEndpoint(params).promise();
        return endpointResponse;
    }
    catch(ex)
    {
        console.log(`Failed to deregister the endpoint:${targetArn}`, ex)
        return null;
    }
}

  static async sendPushNotification(targetArn: any, pushData: { data: any; notification: any }): Promise<boolean> {
    try {
      const message = {
        GCM: JSON.stringify({ data: pushData.data, notification: pushData.notification})
      };

      const params = {
        MessageStructure: 'json',
        Message: JSON.stringify(message),
        TargetArn: targetArn    
      };
      
      var sns = new SNS({ apiVersion: 'latest', region: process.env.SNS_REGION });
      var publishTextPromise = await sns.publish(params).promise();
      const messageId:string = publishTextPromise.MessageId;
      if (messageId) {
        console.log('Message published: ', messageId);
      } else {
        console.log('Message publish failed.');
      }

      return true;
    } catch (ex) {
      console.log(`Failed to send push notification to the target arn:${targetArn}`, ex);
      return false;
    }
  }

  static async publishToSNS(message: any, messageAttributes:any = null): Promise<string> {
    let params: PublishInput = {
      Message: JSON.stringify(message) /* required */,
      TopicArn: process.env.EVENT_PROCESSOR_TOPIC_ARN,
      MessageAttributes:messageAttributes
    };

    try {
      console.log("published message",JSON.stringify(params));
      var sns = new SNS({ apiVersion: 'latest', region: process.env.SNS_REGION });
      var publishTextPromise = await sns.publish(params).promise();
      return publishTextPromise.MessageId;
    } catch (ex) {
      console.log(`Failed to send notification to sns`, ex);
      return null;
    }
  }
}
