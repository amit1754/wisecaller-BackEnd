import { verify } from "jsonwebtoken";
require("dotenv").config({ path: ".env.dev" });

const secret: any = process.env.JWT_SECRET;

const verifyJWTToken = (token: any) => {
  const verifyToken = verify(token, secret);
  return verifyToken;
};

export default verifyJWTToken;
