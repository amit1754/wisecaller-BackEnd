import { Request, Response } from "express";
import snsClient from "../../utils/snsClient";
import event from "./event-handler";
import { logError } from "@wisecaller/logger";
const EventHandler = new event();

class MessageController {
  async index(req: Request, res: Response) {
    try {
      let event = { ...req.body };
      await EventHandler.index(event);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async callBack(req: Request, res: Response) {
    try {
      let request: any = req;
      let loggedInUser: any = request.body.user;
      let event = {
        type: "CALL_BACK_REQUEST",
        title: `${loggedInUser.first_name} ${loggedInUser.last_name} has requested for a callback.`,
        user: loggedInUser,
        to: req.body.to,
        text: req.body.message,
      };
      await EventHandler.index(event);
      res.status(200).json({ success: true });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }

  async customNotification(req: Request, res: Response) {
    try {
      let request: any = req;
      let loggedInUser: any = request.body.user;
      let event = {
        type: "CUSTOM_NOTIFICATION",
        title: req.body.title,
        user: loggedInUser,
        to: [...req.body.to],
        send_all: req.body.send_all,
        text: req.body.text,
      };
      await snsClient.publishToSNS(event);
      res.status(200).json({ success: true });
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
}

export default MessageController;
