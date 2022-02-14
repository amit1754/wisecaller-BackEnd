

import { AuthToken } from "../models/auth-token";

export const getUserToken = async (username: any):Promise<any>=> {
  return await AuthToken.findOne({
    $or: [
      { mobileNo: username },
      { email: username}
    ]
  });
};

export const findOneAndUpdate = async (username: any, payload:any,options:any):Promise<any>=> {
  return await AuthToken.findOneAndUpdate(
    { $or: [
      { mobileNo: username },
      { email: username}
    ] },
    payload,
    options
  );
};

export const createToken = async (payload:any):Promise<any>=>{
    let token = new AuthToken(payload);
  await token.save();
  return token;
};
