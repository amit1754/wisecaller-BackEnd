import { Request, Response, NextFunction } from "express";
import {getUserBll} from "@wisecaller/user-service";
import { default as jwtVerify } from "./util/verifyJWTToken";

export const authorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reqData: any = req.headers;
    const { authorization } = reqData;
    if (!authorization) throw new Error("Token is not found");
    const token =
      authorization && authorization.startsWith("Bearer ")
        ? authorization.slice(7, authorization.length)
        : authorization;
    const verifyToken: any = jwtVerify(token);

    if (!verifyToken) throw new Error("token is invalid");

    const currentDate = Math.floor(Date.now() / 1000);

    if (currentDate > verifyToken?.exp) {
      throw new Error("token is expired");
    }
    const data: any = await getUserBll.findUserById(verifyToken._id);
    if (data) {      
      req.body.user =data;
      req.body.token = token;
      next();
    } else {
      throw new Error("unauthorized");
    }
  } catch (error: any) {
    return res.status(401).send({ success: false, message: error.message });
  }
};
