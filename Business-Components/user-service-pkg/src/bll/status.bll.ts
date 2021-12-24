import * as status from "../dal/status.dal";
export default class StatusBLL {

async getStatusById(id: any):Promise<any>{
  return await status.getStatusById (id);
}

async getSubstatusById(id:any){
  return await status.getSubStatusById(id);
}

async getNotesById(id:any){
  return await status.getNotesById(id);
}

    
}