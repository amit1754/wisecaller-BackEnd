import { Request, Response } from "express";
import { Packages } from "../../models/packages";
import { IPackage } from '../../interfaces/package'

class ServiceController {


  async add(req: Request, res: Response) {
    try {

      const logginUser: any = req.user

      if (logginUser?.role != 'ADMIN') {
        res.status(401).json({ success: false, message: "you cannot access this service" })
      }
      const payload: IPackage = {
        ...req.body,
      };
      const packages = new Packages(payload);
      const savePack = await packages.save();
      if (savePack) {
        return res.status(200).json({ success: true, message: "package create successfully", data: savePack });
      }
      else {
        throw new Error('package create failed')
      }
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  async show(req: Request, res: Response) {
    try {
      let packages = await Packages.find();
      return res.status(200).json({ success: true, message: "packages get successfully", data: packages });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params
      const logginUser: any = req.user

      if (logginUser?.role != 'ADMIN') {
        res.status(401).json({ success: false, message: "you cannot access this service" })
      }
      const payload: IPackage = {
        ...req.body,
      };

      let user = await Packages.findOneAndUpdate(
        { _id: id },
        payload,
        {
          upsert: true,
          new: true,
        }
      );
      return res.status(200).json({ success: true, message: "update successfully", data: user });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  async deletePackage(req: Request, res: Response) {
    try {
      const { id } = req.params
      const logginUser: any = req.user

      if (logginUser?.role != 'ADMIN') {
        res.status(401).json({ success: false, message: "you cannot access this service" })
      }

      let user = await Packages.findByIdAndDelete(id)
      return res.status(200).json({ success: true, message: "package delete successfully", data: user });
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

const controller = new ServiceController();
export default ServiceController;
