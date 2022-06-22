import { Request, Response } from "express";
import { GlobalTypes } from "../../models/global-types";

class GlobalTypesController {
  async index(req: Request, res: Response) {
    try {
      let sort_key = req.body.sort_key || "type";
      let sort_direction = req.body.sort_direction === "DESC" ? -1 : 1;
      let criteria = {};

      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
        populate: {
          path: "statuses",
        },
      };

      if (req.body.search) {
        Object.assign(criteria, {
          type: { $regex: req.body.search, $options: "i" },
        });
      }

      let global_types =
        req.body.page || req.body.limit
          ? await GlobalTypes.paginate(criteria, options)
          : await GlobalTypes.find(criteria);
      return res.status(200).json({ success: true, data: global_types });
    } catch (error: any) {
      console.log(error);
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };
      let global_types: any = {};

      if (payload.isDeleted) {
        await GlobalTypes.findOneAndDelete({ _id: payload._id });
      } else {
        let global_types = await GlobalTypes.findOneAndUpdate(
          {
            type: payload.type,
          },
          payload,
          { upsert: true, new: true }
        );
      }
      return res.status(200).json({ success: true, data: global_types });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default GlobalTypesController;
