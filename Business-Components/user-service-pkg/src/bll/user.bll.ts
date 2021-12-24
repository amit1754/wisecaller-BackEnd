import * as userdal from "../dal/user.dal";
import { globalTypeModel } from "../models/globalType.Model";
import StatusBLL from "./status.bll";

export const statusBLL = new StatusBLL();
export default class UserBLL {
  async createUser(payload: any): Promise<any> {
    return await userdal.createUser(payload);
  }

  async findUserByPhone(mobileNo: any): Promise<any> {
    let user = await userdal.getUserByPhone(mobileNo);
    return user;
  }

  async findUserById(id: any): Promise<any> {
    let user = await userdal.getUserById(id);
    return user;
  }
  async findOneAndUpdate(id: any,obj: any): Promise<any> {
    let user = await userdal.findOneAndUpdate(id, obj);
    return user;
  }

  async getUserDetails(id: any) {
    let user: any = await userdal.getUserById(id);
    if (user?.user_status?.status?.applicable_types) {
      user.user_status.status.applicable_types = await globalTypeModel.find({
        _id: { $in: user?.user_status?.status?.applicable_types },
      });
    }

    if (user?.modes?.workLifeBalance?.data) {
      let data = user?.modes?.workLifeBalance?.data;
      let status = await statusBLL.getStatusById(data.status);
      let sub_status = await statusBLL.getSubstatusById(data.sub_status);
      user.modes.workLifeBalance.data.status = status;
      user.modes.workLifeBalance.data.sub_status = sub_status;
    }

    if (user?.modes?.roadSafetyStatus?.data?.status?.applicable_types) {
      user.modes.roadSafetyStatus.data.status.applicable_types =
        await globalTypeModel.find({
          _id: {
            $in: user?.modes?.roadSafetyStatus?.data?.status
              ?.applicable_types,
          },
        });
    }

    if (user?.user_status?.status?.status_notes?.id) {
      let notesData = await statusBLL.getNotesById(user?.user_status?.status?.status_notes?.id)
      if (notesData) {
        user.user_status.status.status_notes.notes = notesData;
      }
    }
    return user;
  }

}