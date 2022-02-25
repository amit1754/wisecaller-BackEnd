import { Request, Response, NextFunction } from "express";
import { getUserBll } from "@wisecaller/user-service";
import { VerifyJWT } from "../utils/";
import { Organization } from "../models/organization";

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
    const verifyToken: any = VerifyJWT(token);

    if (!verifyToken) throw new Error("token is invalid");

    const currentDate = Math.floor(Date.now() / 1000);

    if (currentDate > verifyToken?.exp) {
      throw new Error("token is expired");
    }

    const organization: any = await Organization.findById(verifyToken._id);
    if (organization) {
      req.body.user = organization;
      req.body.token = token;
      next();
    } else {
      throw new Error("unauthorized");
    }
  } catch (error: any) {
    return res.status(401).send({ success: false, message: error.message });
  }
};
