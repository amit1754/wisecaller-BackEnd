
import {User} from "../models/user.model";
import { UserDevices } from "../models/user_devices";
export const getUserByPhone = async (phone: string):Promise<any>=> {
  let user = await User.findOne({ "phones.no": phone });
  return user;
};

export const getUserByPayload = async (payload: any):Promise<any>=> {
  let user = await User.find(payload);
  return user;
};

export const getUserByPhoneAndId = async (id: any ,phone: string):Promise<any>=> {
  let user = await User.findOne({ _id: { $ne: id },
    "phones.no":phone,
  });
  return user;
};

export const findOneUserLean = async (payload: any):Promise<any>=> {
  let user = await User.findOne(payload).lean();
  return user;
};

export const findOneUser = async (payload: any):Promise<any>=> {
  let user = await User.findOne(payload);
  return user;
};

export const findOneAndUpdate = async (id: any, obj:any,options:any):Promise<any>=> {
  let user =  await User.findOneAndUpdate(
    { _id: id },
    obj,
    options
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


export const findUserDeviceById = async (id: any):Promise<any>=> {
  let devices = await UserDevices.find({ user: id });
  return devices;
};


export const findOneAndRemoveById = async (id: any):Promise<any>=> {
  await UserDevices.findOneAndRemove({ user: id });
  return true;
};

export const findOneDeviceByTokenById = async (id: any,token:any):Promise<any>=> {
  let device  = await UserDevices.findOne({
    user: id,
    "user_device.device_token": token,
  }).lean();
  return device;
};

export const findOneDeviceAndUpdateById = async (id:any, payload:any,options:any):Promise<any>=>{
  await UserDevices.findOneAndUpdate(
    { _id: id },
    { ...payload },
    options
  );
}


export const createUserDevice = async (payload: any):Promise<any>=> {
  let devices = new UserDevices(payload);
  await devices.save();
  return devices;
};

export const getuser =async ()=>{
  return await User.find()
}