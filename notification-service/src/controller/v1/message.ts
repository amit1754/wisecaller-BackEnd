import { Request, Response } from "express";
import snsClient from "../../utils/snsClient";
import event from "./event-handler";
const EventHandler = new event();

class MessageController {
  async index(req: Request, res: Response) {
    try {
      let event = { ...req.body };
      await EventHandler.index(event);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async callBack(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.user;
      let event = {
        type: "CALL_BACK_REQUEST",
        title: `${loggedInUser.first_name} ${loggedInUser.last_name} has requested for a callback.`,
        user: loggedInUser,
        to: req.body.to,
        text: req.body.message,
      };
      await EventHandler.index(event);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async customNotification(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.user;
      let event = {
        type: "CUSTOM_NOTIFICATION",
        title: req.body.title,
        user: loggedInUser,
        to: [...req.body.to],
        send_all: req.body.send_all,
        text: req.body.text,
      };
      await snsClient.publishToSNS(event);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default MessageController;
