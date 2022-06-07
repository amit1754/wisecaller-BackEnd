import { Request, Response } from "express";
import { Template } from "../../models/template";
import { uploadImage } from "../../utils/aws";
import fs from "fs";

class TemplateController {
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

      let templates =
        req.query.page || req.query.limit
          ? await Template.paginate(criteria, options)
          : await Template.find(criteria);

      return res.status(200).json({ success: true, data: templates });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      if (req.file) {
        let url = await uploadImage(req.file.path, req.file.filename);
        if (url) {
          Object.assign(payload, { template: url });
        }
        fs.unlinkSync(req.file.path);
      }

      let template: any = {};

      if (payload?.isDeleted) {
        await Template.findOneAndDelete({ name: payload.name });
      } else {
        template = await Template.findOneAndUpdate(
          { name: payload.name },
          payload,
          {
            upsert: true,
            new: true,
          }
        );
      }
      return res.status(200).json({ success: true, data: template });
    } catch (error) {}
  }
}

export default TemplateController;
