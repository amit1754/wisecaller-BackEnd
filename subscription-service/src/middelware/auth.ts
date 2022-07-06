import { Request, Response, NextFunction } from "express";
import { getUserBll } from "@wisecaller/user-service";
import { User } from "../model/user.model";
import { JWTVerfiy } from "../utils";
import { Organization } from "../model/organization";

export const authorization = async (
  req: any,
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
    const verifyToken: any = JWTVerfiy(token);

    if (!verifyToken) throw new Error("token is invalid");

    const currentDate = Math.floor(Date.now() / 1000);

    if (currentDate > verifyToken?.exp) {
      throw new Error("token is expired");
    }

    let data: any = {};
    const user: any = await User.findById(verifyToken._id);
    const organization: any = await Organization.findOne({
      _id: verifyToken._id,
    });
    data = user ? user : organization;
    if (data) {
      req.body.user = data;
      req.body.token = token;
      next();
    } else {
      throw new Error("unauthorized");
    }
  } catch (error: any) {
    return res.status(401).send({ success: false, message: error.message });
  }
};
