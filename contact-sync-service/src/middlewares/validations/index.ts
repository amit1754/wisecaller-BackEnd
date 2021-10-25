import { Request, Response, NextFunction } from "express";

export const validate = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error: any) {
      res.status(422).json({ success: false, message: error.message });
    }
  };
};
