import { Request, Response, NextFunction } from "express";

export const validate = (schema:any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      return next();
    } catch (error:any) {
      return res.status(422).json({ success: false, message: error.message });
    }
  };
};
