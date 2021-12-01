var FCM = require("fcm-node");
var serverKey =
  "AAAAe6e8p2w:APA91bEiNXXoQ3FI0YrcEkWW-u6p6a453xVOIPmaMczmOLMb1IqrlbCR46vpnKTmhpiTeRcj0iTrx37X4uBlrft_GcWpvnXBn3QxewH-qNuRQnrzuXjeoQEmS6Dt0LpamRravcKdUMHj";
var fcm = new FCM(serverKey);

var message = {
  //this may vary according to the message type (single recipient, multicast, topic, et cetera)
  to: "cX42gLnRQIuKW6bY1GZVbw:APA91bFcALPPScndIE_pR4DR-OPzFd4a_nhyzrHnBZm2yuKPSevkXV4FH1PZy7JcZdLmNkEKiAxxgwvzbF74n4nzDdc6F977ZtZIhMEgREiLV48UVh5At9qtiGm6hsULVUPojrU01Y2w",
  collapse_key: "green",

  notification: {
    title: "Title of your push notification",
    body: "Body of your push notification",
  },

  data: {
    //you can send only notification or only data(or include both)
    my_key: "my value",
    my_another_key: "my another value",
  },
};

fcm.send(message, function (err: any, response: any) {
  if (err) {
    console.log("Something has gone wrong!", err);
  } else {
    console.log("Successfully sent with response: ", response);
  }
});
