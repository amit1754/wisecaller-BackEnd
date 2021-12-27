import * as status from "../dal/status.dal";
export default class StatusBLL {

async getStatusByFindId(id: any):Promise<any>{
  return await status.getStatusByFindId (id);
}

async getSubstatusByFindId(id:any){
  return await status.getSubStatusByFindId(id);
}
async getStatusById(id: any):Promise<any>{
  return await status.getStatusById (id);
}

async getSubstatusById(id:any){
  return await status.getSubStatusById(id);
}

async getStatusByPayloadLean(payload: any): Promise<any> {
  return await status.getStatusByPayloadLean(payload);
} 

async getStatusByPayload(payload: any): Promise<any> {
  return await status.getStatusByPayload(payload);
} 


async getSubStatusByPayloadLean(payload: any): Promise<any> {
  return await status.getSubStatusByPayloadLean(payload);
} 

async getSubStatusByPayload(payload: any): Promise<any> {
  return await status.getSubStatusByPayload(payload);
} 


async getNotesById(id:any){
  return await status.getNotesById(id);
}

async getGlobalType(payload:any){
return await status.getGlobalType(payload);
}

async getGlobalTypeLean(payload:any){
  return await status.getGlobalTypeLean(payload);
  }

async getCustomStatusById(id:any){
  return await status.getCustomStatusById(id);
}
}