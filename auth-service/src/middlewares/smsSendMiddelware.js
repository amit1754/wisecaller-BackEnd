require("dotenv").config();
const AWS = require("aws-sdk");
console.log("object :>> ", process.env.AWS_ACCESS_KEY_ID);
console.log("object :>> ", process.env.AWS_SECRET_ACCESS_KEY);
console.log("object :>> ", process.env.AWS_REGION);
const sendSMS1 = async (mobileNo, otp) => {
  var params = {
    Message: `Your verification message is ${otp}`,
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
    .then(function (data) {
      console.log("true :>> ", data);
      return true;
    })
    .catch(function (err) {
      console.log("true :>> ", err);
      return false;
    });
};
export default sendSMS1;
