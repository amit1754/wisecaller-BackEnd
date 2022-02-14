import * as authToken from "../dal/authToken.dal";
export default class AuthTokenBLL {

async getTokenByPhone(phone: any):Promise<any>{
  return await authToken.getUserToken(phone);
}
async findOneAndUpdate(phone: any, payload:any,options:any):Promise<any>{
  return await authToken.findOneAndUpdate(phone, payload,options);
}
async createToken(payload: any):Promise<any>{
  return await authToken.createToken(payload);
}    
}