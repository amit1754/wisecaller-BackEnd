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
      const { callLogs }: any = req.body
      const data = await User.find({}, { mobileNo: 1, _id: 0 })

      const contactDetails = await CallHistory.findOne({user:loginUser._id})

      const mNo = map(data, function (o) {
        return o.mobileNo
      })
    
    
    
     const updateR :any= map(callLogs, function (o:any) {
      
      o.dateId=new Date(o.dateId)
      return o
    })
      
    let payload:any={
      user:loginUser._id,
      callLogs:updateR,
    }
   

      const callHistorySave= new CallHistory(payload)
      const saveresponse=callHistorySave.save()

      res.status(200).json({ success: true, message: "Sucess", data: saveresponse });

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

  async addNumber(req: Request, res: Response){
    try {
      const requestData =req.body
      const loginUser: any = req.user
      const {callDetails}=requestData

      const contactDetailsGet = await CallHistory.findOne({callLogs: {$elemMatch: {_id:requestData.callLogId}}})
      const a=map(contactDetailsGet.callLogs, function(o:any) {
        if(o._id==requestData.callLogId)
        { 
          
            o.callList.push(callDetails)
     
        }
        
        return o;
      })
    const data=await   CallHistory.findOneAndUpdate(
        { user: loginUser._id},
        {callLogs:a},
        {upsert:true,new:true})
      

      
      res.status(200).json({ success: true, message: "success",callLogs:data });
      
    } catch (error:any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
  async deleteNumber(req: Request, res: Response){
    try {
      const requestData =req.body
      const loginUser: any = req.user
      const {callDetails}=requestData

      const contactDetailsGet = await CallHistory.findOne({callLogs: {$elemMatch: {_id:requestData.callLogId}}})


      const a=map(contactDetailsGet.callLogs, function(o:any) {
      
        if(o._id==requestData.callLogId)
        { 
          o.callList.pop()
        }
        return o;
      })
    await   CallHistory.findOneAndUpdate(
        { user: loginUser._id},
        {callLogs:a},
        {upsert:true,new:true})
      
      res.status(200).json({ success: true, message: "success",data:[]});
      
    } catch (error:any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }


}


export default callHistory;
