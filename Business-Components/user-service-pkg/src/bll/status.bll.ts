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


async getNotesById(id:any){
  return await status.getNotesById(id);
}

    async getCustomStatusById(id:any){
      return await status.getCustomStatusById(id);
    }
}