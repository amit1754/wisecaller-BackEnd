import { verify } from "jsonwebtoken";
require("dotenv").config({ path: ".env.dev" });

const secret: any = process.env.JWT_SECRET;

export const verifyJWTToken = (token: any) => {
  const verifyToken = verify(token, secret);
  return verifyToken;
};
