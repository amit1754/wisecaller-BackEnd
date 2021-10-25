import { Request, Response, NextFunction } from "express";
import { IStatus, ISubStatus } from "../../interfaces/status";
import { UserStatus } from '../../models/status'
import { UserSubStatus } from '../../models/subStatus'
import { deletefile } from '../../middlewares/uploadService'
class StatusController {
  async addStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const payload: IStatus = {
        ...req.body,
        logo: reqPayload.file ? reqPayload.file.key : null
      };
      const status = new UserStatus(payload);
      await status.save();
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      let userEvent = await UserStatus.aggregate([
        {
          "$lookup": {
            "from": 'usersubstatuses',
            "localField": '_id',
            "foreignField": 'parentId',
            "as": "subCategory"
          }
        }
      ]);
      res.status(200).json({ success: true, message: "event get successfully", data: userEvent });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const { id }: any = req.params;
      let payload: any = {
        ...req.body,
      };
      if (reqPayload.file) {
        payload = {
          ...payload,
          logo: reqPayload.file.key
        }
        let statusFind = await UserStatus.findById(id)
        if (statusFind.logo) {
          await deletefile(statusFind.logo)
        }
      }

      let StatusUpdate = await UserStatus.findOneAndUpdate(
        { _id: id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      res.status(200).json({ success: true, message: "user Event Status update successfully", data: StatusUpdate });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id }: any = req.params;


      let user = await UserStatus.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Event Status delete sucessfully", data: user });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async addSubStatus(req: Request, res: Response) {
    try {
      console.log("aasdj")
      const reqPayload: any = req
      const payload: ISubStatus = {
        ...req.body,
        logo: reqPayload.file ? reqPayload.file.key : null
      };
      const status = new UserSubStatus(payload)
      status.save()
      res.status(200).json({ success: true, message: "Event Status delete sucessfully", data: [] });

    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async updateSubStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const { id }: any = req.params;
      let payload: any = {
        ...req.body,
      };
      if (reqPayload.file) {
        payload = {
          ...payload,
          logo: reqPayload.file.key
        }
        let statusFind = await UserSubStatus.findById(id)
        if (statusFind.logo) {
          await deletefile(statusFind.logo)
        }
      }

      let StatusUpdate = await UserSubStatus.findOneAndUpdate(
        { _id: id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      res.status(200).json({ success: true, message: "Sub Event Status update successfully", data: StatusUpdate });
    } catch (error: any) {
      console.log(error.message);
      res.status(500).json({ success: false, message: error.message });
    }

  }
  async deleteSub(req: Request, res: Response) {
    try {
      const { id }: any = req.params;
      let user = await UserSubStatus.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Event Sub Status delete sucessfully", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }


}

export default StatusController;
