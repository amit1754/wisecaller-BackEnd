import SmsController from "./v1/sendsms";
import MessageController from "./v1/message";

export const smsController = new SmsController();
export const Message = new MessageController();
