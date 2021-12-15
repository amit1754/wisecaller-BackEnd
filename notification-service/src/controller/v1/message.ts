import { Request, Response } from "express";
import event from "./event-handler";
import { UserContact } from "../../models/contactsync";
const EventHandler = new event();

class MessageController {
  async index(req: Request, res: Response) {
    try {
      let event = { ...req.body, user: req.user };
      // console.log("::::::", event);
      await EventHandler.index(event);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default MessageController;
