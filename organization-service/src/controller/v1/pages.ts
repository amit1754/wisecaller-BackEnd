import { Request, Response } from "express";
import { Pages } from "../../models/pages";

class PagesController {
  async index(req: Request, res: Response) {
    try {
      let sort_key: any = req.body.sort_key || "name";
      let sort_direction: any =
        req.body.sort_direction && req.body.sort_direction === "DESC" ? -1 : 1;

      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
      };

      let criteria = {};

      let pages =
        req.query.page || req.query.limit
          ? await Pages.paginate(criteria, options)
          : await Pages.find(criteria);

      return res.status(200).json({ success: true, data: pages });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      let page: any = {};

      if (payload?.isDeleted) {
        await Pages.findOneAndDelete({ name: payload.name });
      } else {
        page = await Pages.findOneAndUpdate({ name: payload.name }, payload, {
          upsert: true,
          new: true,
        });
      }
      return res.status(200).json({ success: true, data: page });
    } catch (error) {}
  }
}

export default PagesController;