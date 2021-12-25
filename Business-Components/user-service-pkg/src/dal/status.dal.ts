

import { customStatus } from "../models/customStatus";
import { Notes } from "../models/notes";
import { UserStatus } from "../models/status";
import { UserSubStatus } from "../models/subStatus";
import { globalTypeModel } from "../models/globalType.Model";

export const getStatusByFindId = async (id: any):Promise<any>=> {
  return await UserStatus.findById(id).lean();
};

export const getSubStatusByFindId = async (id: any):Promise<any>=> {
  return await UserSubStatus.findById(id);
};
export const getStatusById = async (id: any):Promise<any>=> {
  return await UserStatus.findOne({
    _id: id,
  });
};

export const getStatusByPayloadLean = async (payload: any):Promise<any>=> {
  return await UserStatus.findOne(payload).lean();
};

export const getStatusByPayload = async (payload: any):Promise<any>=> {
  return await UserStatus.findOne(payload)
  .populate({
    path: "applicable_types",
    model: "globalType",
  });;
};

export const getSubStatusByPayloadLean = async (payload: any):Promise<any>=> {
  return await UserSubStatus.findOne(payload).lean();
};

export const getSubStatusByPayload = async (payload: any):Promise<any>=> {
  return await UserSubStatus.findOne(payload)
};



export const getSubStatusById = async (id: any):Promise<any>=> {
  return await UserSubStatus.findOne({
    _id: id,
  });
};

export const getNotesById = async (id:any):Promise<any>=>{
  return await Notes.findById(id);
};

export const getCustomStatusById = async (id: any):Promise<any>=> {
  return await customStatus.findOne({
    customId: id,
  });
};
export const getGlobalType = async (payload: any):Promise<any>=> {
  return await customStatus.findOne(payload);
};

export const getGlobalTypeLean = async (payload: any):Promise<any>=> {
  return await customStatus.findOne(payload).lean()
};


