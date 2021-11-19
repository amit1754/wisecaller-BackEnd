import { Request, Response } from "express";
import { Notes } from "../../models/notes";

class NotesController {
  async index(req: Request, res: Response) {
    try {
      let query: any = {};

      if (req.query.is_admin) {
        Object.assign(query, { is_admin: req.query.is_admin });
      }

      if (req.query.type) {
        Object.assign(query, { type: req.query.type });
      }

      let notes = await Notes.find(query);
      return res.status(200).json({ success: true, data: notes });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async add(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.user;
      let payload: any = {};
      if (req.body?.is_admin) {
        Object.assign(payload, { ...req.body });
      } else {
        Object.assign(payload, { ...req.body, user: loggedInUser._id });
      }

      let notes = new Notes(payload);
      await notes.save();
      return res
        .status(200)
        .json({ success: true, message: "Notes saved successfully" });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async details(req: Request, res: Response) {
    try {
      let details = await Notes.findOne({ _id: req.params.id });
      return res.status(200).json({ success: true, data: details });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let notes = await Notes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { upsert: true, new: true }
      );
      return res.status(200).json({ success: true, data: notes });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      await Notes.findOneAndRemove({ _id: req.params.id });
      return res
        .status(200)
        .json({ success: true, message: "Notes deleted successfully" });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default NotesController;
