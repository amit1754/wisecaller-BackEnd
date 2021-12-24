
import {User} from "../models/user.model";
export const getUserByPhone = async (phone: string):Promise<any>=> {
  let user = await User.findOne({ "phones.no": phone });
  return user;
};

export const findOneAndUpdate = async (id: any, obj:any):Promise<any>=> {
  let user =  await User.findOneAndUpdate(
    { _id: id },
    obj
  );
  return user;
};

export const createUser = async (payload: any):Promise<any>=> {
  let user = new User(payload);
  let userDetails = await user.save();
  return userDetails;
};

export const getUserById = async (id: any):Promise<any>=> {
  let user: any = await User.findOne(
    { _id: id }
  );
  return user;
};