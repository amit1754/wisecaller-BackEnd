import { Request, Response } from "express";
import { Schema } from "mongoose";
import { Notes } from "../../models/notes";

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

      if (req.body.search) {
        Object.assign(criteria, {
          text: { $regex: req.body.search, $options: "i" },
        });
      }

      const notes =
        req.body.page || req.body.limit
          ? await Notes.paginate(criteria, options)
          : await Notes.find(criteria);
      return res.status(200).json({ success: true, data: notes });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async updateNotes(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };
      delete payload.user;
      delete payload.token;

      let notes: any;

      if (payload.isDeleted) {
        notes = await Notes.findOneAndDelete({ _id: payload._id });
      } else {
        if (payload._id) {
          notes = await Notes.findOneAndUpdate(
            { _id: payload._id },
            { ...payload },
            {
              upsert: true,
              new: true,
            }
          );
        } else {
          notes = new Notes(payload);
          await notes.save();
        }
      }
      return res.status(200).json({ success: true, data: notes });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default NoteController;
