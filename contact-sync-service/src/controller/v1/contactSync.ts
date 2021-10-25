import { Request, Response } from "express";
import { IContactSync } from "../../interfaces/contactSync";
import { UserContact } from '../../models/contactsync'
import { User } from '../../models/user'
import { map, find } from 'lodash';

class ContactSyncController {
    async add(req: Request, res: Response) {
        try {
            const loginUser: any = req.user
            const { contact }: any = req.body
            const data = await User.find({}, { mobileNo: 1, _id: 0 })
            const mNo = map(data, function (o) {
                return o.mobileNo
            })
            let contactUpdate: any = []
            map(contact, function (o) {
                const data: any = mNo.includes(o.number)
                let iswisecaller: any;
                if (data) {
                    iswisecaller = true
                }
                else {
                    iswisecaller = false
                }
                let a = {
                    ...o,
                    iswisecaller,
                }
                contactUpdate.push(a)
            });

            let userContactFind = await UserContact.findOne({ user: loginUser._id })
            if (userContactFind != null) {

                let userUpdate = await UserContact.findOneAndUpdate({ user: loginUser._id }, { contact: contactUpdate })
                if (userUpdate) {
                    res.status(200).json({ success: true, message: "Sucess", data: [] });
                }
                else {
                    throw new Error('contact sync failed')
                }
            }
            else {
                const payload: IContactSync = {
                    ...req.body,
                    user: loginUser._id
                };
                const user = new UserContact(payload);
                await user.save();
                res.status(200).json({ success: true, message: "Sucess", data: [] });
            }
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const loginUser: any = req.user
            let { number, isFavourite }: any = req.query
           
            const userContactFind = await UserContact.findOne(

                { user: loginUser?._id },
            )
            console.log("userContactFind",userContactFind)
            let updateContact: any = [];
            if (number) {
                find(userContactFind.contact, function (x) {
                    console.log(x.number)
                    if (x.number.search(number) != -1) {
                        updateContact.push(x)
                    }
                })

            }
            else if (isFavourite) {
                find(userContactFind.contact, function (x) {
                    console.log(x.isFavorite)
                    if (x.isFavorite === true) {
                        updateContact.push(x)
                    }
                })

            }
            else {
                updateContact = userContactFind
            }
            res.status(200).json({ success: true, message: "contact list get successfully", data: updateContact});
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message });
        }
    }


}

export default ContactSyncController;
