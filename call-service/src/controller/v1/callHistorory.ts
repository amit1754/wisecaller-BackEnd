import { Request, Response } from "express";
import { map } from "lodash";
import { UserContact } from "../../models/contactsync";
import { User } from '../../models/user';
import { CallHistory } from '../../models/callHistory';


class callHistory {
 
  async add(req: Request, res: Response) {

    try {
      const loginUser: any = req.user
      let { body }: any = req
   

      for(let i = 0; i < body.length; i++){
        
        let data=await User.findOne({mobileNo:body[i].callerId})
        if(data)
        {
          body[i].number=body.callerId
          body[i].callerId=data._id
        }
        else{
          body[i].number=body[i].callerId
          body[i].callerId=null
        }

        body[i].wisecallerId=loginUser._id
        
        const callHistorySave= new CallHistory(body[i])
        await callHistorySave.save()
      }
      
      res.status(200).json({ success: true, message: "Sucess", data: [] });

    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async callDetails(req: Request, res: Response) {
    try {
      const loginUser: any = req.user

      const contactDetails = await CallHistory.find({wisecallerId:loginUser._id}).sort({ updatedAt: -1 })
                      
                        

      
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
      let reqestData:any =req.body
      const loginUser: any = req.user
      let callerHistory:any = await CallHistory.findOne({number:reqestData.callerId})
      if(callerHistory){
        let callerUpdate={
          time:reqestData.time,
          type:reqestData.type,
          simId:reqestData.simId
        }
        callerHistory.callHistory.push(callerUpdate)
         let user = await CallHistory.findOneAndUpdate(
            { _id: callerHistory._id },
            callerHistory,
            {
              upsert: true,
              new: true,
            }
          );
      return res.status(200).json({ success: true, data: user });
        
      }
      else{
        
        reqestData.callHistory={
          time:reqestData.time,
          type:reqestData.type,
          simId:reqestData.simId
        }
        

        let data=await User.findOne({mobileNo:reqestData.callerId})
        if(data)
        {
          reqestData.number=reqestData.callerId
          reqestData.callerId=data._id
        }
        else{
          reqestData.number=reqestData.callerId
          reqestData.callerId=null
        }

        reqestData.wisecallerId=loginUser._id
        
        const callHistorySave= new CallHistory(reqestData)
        await callHistorySave.save()
      }


      

   
      
      res.status(200).json({ success: true, message: "success",callLogs:reqestData });
      
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
