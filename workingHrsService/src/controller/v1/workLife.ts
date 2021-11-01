import { Request, Response, NextFunction } from "express";
import { isValidObjectId, Types } from "mongoose";
import { IWorkingDays } from "../../interfaces/workLifeInterface";
import { WorkLife } from "../../models/worklIfe";



class WorklifeController {
    async add(req: Request, res: Response) {
        try {
            const loggedInUser: any = req.user;
            console.log(`loggedInUser`, loggedInUser)
            let payload: IWorkingDays = {
                ...req.body,
                user: loggedInUser._id,
            }
            const workLife = new WorkLife(payload);
            await workLife.save();
            return res.status(200).json({ success: true, message: "workingdays Added successfully",data:[] });
        } catch (error:any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    async updateWorkdays(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const payload: any = {
                ...req.body,
            };

            await WorkLife.findOneAndUpdate(
                { _id: id },
                payload,
                {
                    upsert: true,
                    new: true,
                }
            );
            return res.status(200).json({ success: true, message: "workingdays update successfully", data: [] });
        } catch (error:any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    async getWorkdays(req: Request, res: Response) {
        try {
            const loggedInUser: any = req.user;


            const userWorkingHrs = await WorkLife.aggregate([
                { $match: { user: loggedInUser._id } },
                {
                    $lookup: {
                        from: 'usersatus',
                        localField: 'otherStatus',
                        foreignField: '_id',
                        as: 'otherStatus'
                    },
                },
            ])
            return res.status(200).json({ success: true, message: "workingdays get successfully", data: userWorkingHrs[0]?userWorkingHrs[0]:[] });
        } catch (error:any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
    async deleteWorkdays(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!isValidObjectId(id)) {
                throw new Error("id is invalid")
            }

            await WorkLife.deleteOne({ _id: Types.ObjectId(id) })
            return res.status(200).json({ success: true, message: "workingdays delete successfully", data: [] });
        } catch (error:any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
}


const Controller = new WorklifeController();

export default WorklifeController;