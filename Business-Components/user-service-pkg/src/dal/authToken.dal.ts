

import { AuthToken } from "../models/auth-token";

export const getTokenByPhone = async (phone: any):Promise<any>=> {
  return await AuthToken.findOne({
    mobileNo: phone,
  });
};
export const findOneAndUpdate = async (phone: any, payload:any,options:any):Promise<any>=> {
  return await AuthToken.findOneAndUpdate(
    { mobileNo: phone },
    payload,
    options
  );
};

export const createToken = async (payload:any):Promise<any>=>{
    let token = new AuthToken(payload);
  await token.save();
  return token;
};
