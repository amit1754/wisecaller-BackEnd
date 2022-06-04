import { Request, Response } from "express";
import { WorkLifeBalance } from "../../models/work-life-balance";
import { getUserBll, getStatusBll } from "@wisecaller/user-service";
import { logError } from "@wisecaller/logger";
import CloudWatchRuleClient  from "@wisecaller/cloudwatcheventrule";
import moment from "moment";

class WorkLifeBalanceController {
  async update(req: Request, res: Response) {
    try {
      let requestData: any = req;
      const loggedInUser: any = requestData.body.user;
      let payload = {
        ...req.body,
        user: loggedInUser._id,
      };
      let updated_work_life: any = {};
      let user = await getUserBll.findOneUserLean({ _id: loggedInUser._id });
      var utcDate =  moment().utc();
      var dateName = utcDate.format("DD_MM_YYYY");
      var ruleName  =dateName+"_" +(loggedInUser._id?"_"+loggedInUser._id:"")+"_WorkLife";
      if (payload.is_deleted) {
        //delete the rule
        await CloudWatchRuleClient.deleteRule(ruleName) 
      
        await WorkLifeBalance.findOneAndRemove({ user: loggedInUser._id });
        updated_work_life = null;
      } else {
        updated_work_life = await WorkLifeBalance.findOneAndUpdate(
          { user: loggedInUser._id },
          payload,
          { upsert: true, new: true }
        );
        var dayIndex = utcDate.day(); 
        var weekDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
        var arrdays = updated_work_life.days;        
        var processworkLife = true;
        if ( updated_work_life.days != null){
          var wldays:any = updated_work_life.days;
          switch(dayIndex){
            case 0:
              if (!wldays.monday)
              {
                processworkLife = false;
              }
              break;
            case 1:
              if (!wldays.tuesday)
              {
                processworkLife = false;
              }
              break;
              case 2:
              if (!wldays.wednesday)
              {
                processworkLife = false;
              }
              break;
              case 3:
              if (!wldays.thursday)
              {
                processworkLife = false;
              }
              break;
              case 4:
              if (!wldays.friday)
              {
                processworkLife = false;
              }
              break;
              case 5:
              if (!wldays.saturday)
              {
                processworkLife = false;
              }
              break;
              case 6:
              if (!wldays.sunday)
              {
                processworkLife = false;
              }
              break;
          }
        }

        if (!processworkLife){
          await CloudWatchRuleClient.deleteRule(ruleName);
        }
        else {
          var startTime = moment(utcDate.format("YYYY-MM-DD") +" "+ updated_work_life.start_time);   
                  
          var diff = startTime.diff(moment(utcDate), 'minutes');
          if (diff >0){
            var createRule = ruleName+"_TRIGGER";
            var schedulingTime = moment(startTime, 'ddd DD/MM/YYYY, hh:mm A').utc(true);
            var hour = schedulingTime.format('HH') ;
            var min = schedulingTime.format('mm');
            var month = utcDate.format('MM');
            var day = utcDate.format('DD');
            var year = utcDate.format('YYYY');
            var exp = 'cron('+min+'/5 '+hour+' '+day+' '+month+' ? '+year+')';              
            var workLifePayload = {userId:loggedInUser._id,ruleName: createRule,customStatusId:"NoObject_1-1"};
            await CloudWatchRuleClient.createCloudWatchEvent(createRule,exp,workLifePayload,process.env.STATUS_PROCESSOR_TOPIC_ARN)
          }
        }
        let status = await getStatusBll.getSubStatusByPayload({
          _id: updated_work_life.status,
        });
        let sub_status = await getStatusBll.getSubStatusByPayload({
          _id: updated_work_life.sub_status,
        });

        Object.assign(updated_work_life, {
          status: status,
          sub_status: sub_status,
        });
      }

      let user_payload = {
        ...user.modes,
        workLifeBalance: {
          is_active: req.body.is_deleted ? false : req.body.is_active,
          data: updated_work_life,
        },
      };

      await getUserBll.findOneAndUpdate(
        loggedInUser._id,
        { modes: user_payload },
        { upsert: true, new: true }
      );
      return res.status(200).json(updated_work_life);
    } catch (error: any) {
      return logError(error, req, res);
    }
  }
}

export default WorkLifeBalanceController;
