import { Request, Response, NextFunction } from "express";

export const validate = (schema:any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error:any) {
      return res.status(400).json({ error: error.message });
    }
  };
};
