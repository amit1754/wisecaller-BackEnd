import { Request, Response } from "express";
import { Subscription } from "../../model/subscription";
class SubscriptionController {
  async index(req: Request, res: Response) {
    try {
      let criteria = {};
      if (req.query.type) {
        Object.assign(criteria, { type: req.query.type });
      }
      let subscriptions = await Subscription.find(criteria);
      return res.status(200).json({ success: true, data: subscriptions });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      await Subscription.findOneAndUpdate(
        { title: payload.title, type: payload.type },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default SubscriptionController;
