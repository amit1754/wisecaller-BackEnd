import { Request, Response } from "express";
import { Woucher } from "../../models/woucher";
import { IWoucher } from "../../interfaces/package";

class WoucherController {
    async add(req: Request, res: Response) {
        try {
            const payload: IWoucher = {
                ...req.body,
            };

            const Wouchers = new Woucher(payload);
            const savePack = await Wouchers.save();
            if (savePack) {
                return res.status(200).json({ success: true, message: "Woucher create successfully", data: savePack });
            }
            else {
                throw new Error('Woucher create failed')
            }
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    async show(req: Request, res: Response) {
        try {
            const { code } = req.query
            let packages;
            if (code) {
                packages = await Woucher.find({ code });
            }
            else {
                packages = await Woucher.find();
            }
            return res.status(200).json({ success: true, message: "Woucher get successfully", data: packages });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload: IWoucher = {
                ...req.body,
            };

            let user = await Woucher.findOneAndUpdate(
                { _id: id },
                payload,
                {
                    upsert: true,
                    new: true,
                }
            );
            return res.status(200).json({ success: true, message: "Woucher update successfully", data: user });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    async deleteWoucher(req: Request, res: Response) {
        try {
            const { id } = req.params

            let user = await Woucher.findByIdAndDelete(id)
            return res.status(200).json({ success: true, message: "Woucher delete successfully", data: user });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
}

export default WoucherController;
