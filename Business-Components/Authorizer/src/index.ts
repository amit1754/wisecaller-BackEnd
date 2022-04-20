import { Request, Response, NextFunction } from 'express';
import { default as jwtVerify } from './util/verifyJWTToken';
import './db/connection';
import { User } from './models/user.model';
export const authorization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reqData: any = req.headers;
    const { authorization } = reqData;
    if (!authorization) throw new Error('Token is not found');
    const token =
      authorization && authorization.startsWith('Bearer ')
        ? authorization.slice(7, authorization.length)
        : authorization;
    const verifyToken: any = jwtVerify(token);

    if (!verifyToken) throw new Error('token is invalid');

    const currentDate = Math.floor(Date.now() / 1000);

    if (currentDate > verifyToken?.exp) {
      throw new Error('token is expired');
    }
    const data: any = await User.findOne({ _id: verifyToken._id })
      // .populate({ path: 'active_subscriptions.subscription' })
      .lean();
    if (data) {
      req.body.user = data;
      req.body.token = token;
      next();
    } else {
      throw new Error('unauthorized');
    }
  } catch (error: any) {
    return res.status(401).send({ success: false, message: error.message });
  }
};
