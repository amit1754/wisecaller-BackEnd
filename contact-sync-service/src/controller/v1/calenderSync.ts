import { Request, Response } from "express";
import { ICalenderSync } from "../../interfaces/contactSync";
import { UserCalender } from '../../models/calenderSync'
class CalenderSyncController {
    async add(req: Request, res: Response) {
        try {
            const loginUser: any = req.user
            const userFind = await UserCalender.findOne({ user: loginUser._id })
            const { calenderEvent }: any = req.body

            
            
            if (userFind != null) {

                let { email } = req.body
                let userUpdate = await UserCalender.findOneAndUpdate({ user: loginUser._id }, { calenderEvent: calenderEvent, email })
                if (userUpdate) {
                    res.status(200).json({ success: true, message: "Sucess", data: userUpdate });
                }
                else {
                    throw new Error('calender sync failed')
                }
            }
            else {

                const payload: ICalenderSync = {
                    ...req.body,
                    user: loginUser._id
                };
                const user = new UserCalender(payload);
                const a = await user.save();
                res.status(200).json({ success: true, message: "Sucess", data: a });
            }
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const loginUser: any = req.user

            const userContactFind = await UserCalender.findOne({ user: loginUser?._id })
            res.status(200).json({ success: true, message: "calenderEvent list get successfully", data: userContactFind });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    async deleteEmail(req: Request, res: Response) {
        try {
            const loginUser: any = req.user
            const userFind = await UserCalender.findOne({ user: loginUser?._id })
            if (userFind != null) {
                let removeEmail = await UserCalender.findOneAndUpdate({ user: loginUser._id }, { email: null });
                if (removeEmail) {
                    res.status(200).json({ success: true, message: "Email Remove Successfully", data: [] });
                } else {
                    throw new Error('Email is not removed ')
                }
            }
            else {
                throw new Error('Calender Event not found')
            }
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message });
        }
    }


}

export default CalenderSyncController;
