import { Request, Response } from "express";
import { Note } from "../../models/note";

class NoteController {
  async index(req: Request, res: Response) {
    try {
      let sort_key = req.body.sort_key || "name";
      let sort_direction = req.body.sort_direction === "DESC" ? -1 : 1;
      let criteria = {};

      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
      };

      if (req.body?.type === "ORGANIZATION") {
        Object.assign(criteria, { type: req.body.type });
      }

      const notes =
        req.body.page || req.body.limit
          ? await Note.paginate(criteria, options)
          : await Note.find(criteria);
      return res.status(200).json({ success: true, data: notes });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default NoteController;
