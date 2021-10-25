require("dotenv").config();
const AWS = require("aws-sdk");

const sendSMS1 = async (mobileNo: any, message: any) => {
  var params = {
    Message: message,
    PhoneNumber: mobileNo,
    MessageAttributes: {
      "AWS.SNS.SMS.SenderID": {
        DataType: "String",
        StringValue: "wisecalleer",
      },
    },
  };

  var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  publishTextPromise
    .then(function (data: any) {
      console.error("true :>> ", data);
      return true;
    })
    .catch(function (err: any) {
      console.error("true :>> ", err);
      return false;
    });
};
export default sendSMS1;
