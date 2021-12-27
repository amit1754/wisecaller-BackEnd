import { Request, Response } from "express";
class AuthController {
  async create(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };

      console.log(payload);
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default AuthController;
