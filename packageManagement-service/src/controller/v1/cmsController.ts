import { Request, Response } from "express";
import { CmsModel } from "../../models/CmsModel";
import { IPage } from '../../interfaces/cmsInterface'

class CmsController {


    async add(req: Request, res: Response) {
        try {

            const logginUser: any = req.user
            console.log(logginUser)
            if (logginUser?.role != 'ADMIN') {
                res.status(401).json({ success: false, message: "you cannot access this service" })
            }
            else {
                const payload: IPage = {
                    ...req.body,
                };
                const page = new CmsModel(payload);
                const savePage = await page.save();
                if (savePage) {
                    return res.status(200).json({ success: true, message: "page create successfully", data: [] });
                }
                else {
                    throw new Error('package create failed')
                }
            }
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    async show(req: Request, res: Response) {
        try {
            const { pageName } = req.query
            let page;
            if (pageName) {
                
                page = await CmsModel.find({ pageName});
            }
            else{
                page = await CmsModel.find();

            }
            return res.status(200).json({ success: true, message: "page  get successfully", data: page });
        } catch (error: any) {
            return res.status(500).json({ success: false, messagcmse: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const logginUser: any = req.user

            if (logginUser?.role != 'ADMIN') {
                res.status(401).json({ success: false, message: "you cannot access this service" })
            }
            const payload: IPage = {
                ...req.body,
            };

            let user = await CmsModel.findOneAndUpdate(
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
    async deleteCmspage(req: Request, res: Response) {
        try {
            const { id } = req.params
            const logginUser: any = req.user

            if (logginUser?.role != 'ADMIN') {
                res.status(401).json({ success: false, message: "you cannot access this service" })
            }

            let user = await CmsModel.findByIdAndDelete(id)
            return res.status(200).json({ success: true, message: "page delete successfully", data: user });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
}


export default CmsController;
