import { Request, Response } from "express";
import { Plan } from "../../model/plan";

class PlanController {
  async index(req: Request, res: Response) {
    try {
      let criteria = {};

      if (req.query.subscription) {
        Object.assign(criteria, { subscription: req.query.subscription });
      }

      let plans = await Plan.find(criteria);
      return res.status(200).json({ success: true, data: plans });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let plan = await Plan.findOneAndUpdate(
        { name: req.body.name, subscription: req.body.subscription },
        { ...req.body },
        { upsert: true, new: true }
      );
      return res.status(200).json({ success: true, data: plan });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default PlanController;
