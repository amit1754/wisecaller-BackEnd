require("dotenv").config();
const AWS = require("aws-sdk");

const sendSMS1 = async (mobileNo, otp) => {
  var params = {
    Message: `Your verification message is ${otp}`,
    PhoneNumber: mobileNo,
    MessageAttributes: {
      "AWS.SNS.SMS.SenderID": {
        DataType: "String",
        StringValue: "wisecaller",
      },
    },
  };

  var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
    .publish(params)
    .promise();

  publishTextPromise
    .then(function (data) {
      return true;
    })
    .catch(function (err) {
      return false;
    });
};
export default sendSMS1;
