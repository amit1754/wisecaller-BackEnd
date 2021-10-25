import { Request, Response } from "express";
import { map } from "lodash";
import { UserContact } from "../../models/contactsync";
import { User } from '../../models/user'
import { CallHistory } from '../../models/callHistory'
import {IcallHistory} from '../../interfaces/callHistory'

class callHistory {
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
      let payload :IcallHistory={
        user:loginUser._id,
        contact:contactUpdate
      }
      const callHistoryAdd:any= new CallHistory(payload)
     const saveResp=await  callHistoryAdd.save()


      res.status(200).json({ success: true, message: "Sucess", data: saveResp });

    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async callDetails(req: Request, res: Response) {
    try {
      const loginUser: any = req.user

      const contactDetails = await CallHistory.findOne({user:loginUser._id})
      
      res.status(200).json({ success: true, message: "Sucess", data: contactDetails });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async addFavorite(req: Request, res: Response) {
    try {
      const loginUser: any = req.user
      const { number }: any = req.body
      const userFind = await UserContact.findOne({ user: loginUser._id })
      const { contact } = userFind;
      const updateContact = map(contact, function (x) {
        if (x.number === number) {
          x.isFavorite = true
        }
        else {
          x.isFavorite = false
        }
        return x;
      })

      await UserContact.updateOne({ user: loginUser._id }, { contact: updateContact })
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async addBlock(req: Request, res: Response) {
    try {
      const loginUser: any = req.user
      const { number }: any = req.body
      const userFind = await UserContact.findOne({ user: loginUser._id })
      const { contact } = userFind;
      const updateContact = map(contact, function (x) {
        if (x.number === number) {
          x.isBlock = true
        }
        else {
          x.isBlock = false
        }
        return x;
      })

      await UserContact.updateOne({ user: loginUser._id }, { contact: updateContact })
      res.status(200).json({ success: true, message: "Sucess", data: [] });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}


export default callHistory;
