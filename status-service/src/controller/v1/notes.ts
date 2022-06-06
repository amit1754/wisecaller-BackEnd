import { Request, Response } from "express";
import { Notes } from "../../models/notes";
import { logError } from "@wisecaller/logger";

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

      let notes = await Notes.find(query, {
        is_custom: 0,
        is_admin: 0,
        createdAt: 0,
        updatedAt: 0,
        display_to: 0,
        auto_sms: 0,
      });
      return res.status(200).json({ success: true, data: notes });
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async add(req: Request, res: Response) {
    try {
      const request: any = req;
      const loggedInUser: any = request.body.user;
      let payload: any = {};
      if (req.body?.is_admin) {
        Object.assign(payload, { ...req.body });
      } else {
        Object.assign(payload, { ...req.body, user: loggedInUser._id });
      }

      let notes = new Notes(payload);
      await notes.save();
      return res.status(200).json();
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async details(req: Request, res: Response) {
    try {
      let details = await Notes.findOne(
        { _id: req.params.id },
        { is_custom: 0, is_admin: 0, createdAt: 0, updatedAt: 0 }
      );
      return res.status(200).json({ success: true, data: details });
    } catch (error) {
      return logError(error, req, res);
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
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async remove(req: Request, res: Response) {
    try {
      await Notes.findOneAndRemove({ _id: req.params.id });
      return res.status(201).json();
    } catch (error) {
      return logError(error, req, res);
    }
  }
}

export default NotesController;
