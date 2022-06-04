import { Request, Response } from "express";
import { customStatus } from "../../models/customStatus";
import { WorkLifeBalance } from "../../models/worklIfe";
import { logError } from "@wisecaller/logger";
import moment from "moment";
import CloudWatchRuleClient from "@wisecaller/cloudwatcheventrule";

class CustomStatusController {
  async add(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
      let body: any = req.body;
      const length: number = body.length;
      var utcDate = moment().utc();
      var dateName = utcDate.format("DD_MM_YYYY");
      for (let i = 0; i < length; i++) {
        if (body[i].is_deleted) {
          var custStatus: any = await customStatus.find({
            customId: body[i].customId,
            user: loggedInUser._id,
          });
          var ruleName =
            dateName +
            "_" +
            (loggedInUser._id ? "_" + loggedInUser._id : "") +
            "_" +
            (body[i].customId
              ? body[i].customId
              : custStatus.status + "_" + custStatus.substatus);
          await CloudWatchRuleClient.deleteRule(ruleName);
          await customStatus.findOneAndRemove({
            customId: body[i].customId,
            user: loggedInUser._id,
          });
        } else {
          if (body[i].RRULE) {
            const rruleData: any = body[i].RRULE;
            if (
              rruleData.excludeDates != null &&
              rruleData.excludeDates.length > 0
            ) {
              let date1 = rruleData.excludeDates.map((x: any) =>
                new Date(x).toISOString()
              );
              body[i].RRULE.excludeDates = date1;
            }
          }
          var payload = {
            ...body[i],
            has_processed: false,
          };
          var statusReturned = await customStatus.findOneAndUpdate(
            { customId: body[i].customId, user: loggedInUser._id },
            payload,
            {
              upsert: true,
              new: true,
            }
          );
          var today = utcDate.format("YYYY-MM-DD");
          var createTrigger =
            (moment(body[i].start_date) < moment(utcDate).add(24, "hours") &&
              moment(body[i].start_date) > moment(utcDate) &&
              moment(body[i].end_date) > moment(utcDate)) ||
            (body[i].RRULE != null &&
              (body[i].RRULE.end_date == null ||
                body[i].RRULE.end_date == "" ||
                moment(body[i].RRULE.end_date) > utcDate) &&
              (body[i].RRULE.excludeDates == null ||
                body[i].RRULE.excludeDates.length == 0 ||
                body[i].RRULE.excludeDates.indexOf(moment(today).toDate()) ==
                  -1));
          var ruleName =
            dateName +
            "_" +
            (loggedInUser._id ? "_" + loggedInUser._id : "") +
            "_" +
            (body[i].customId
              ? body[i].customId
              : custStatus.status + "_" + custStatus.substatus);
          await CloudWatchRuleClient.deleteRule(ruleName);

          if (createTrigger) {
            var createRule = ruleName + "_TRIGGER";
            //5/5 * 25 05 ? 2022
            var hour = utcDate.format("HH");
            var min = utcDate.format("mm");
            var month = utcDate.format("MM");
            var day = utcDate.format("DD");
            var year = utcDate.format("YYYY");
            var exp =
              "cron(" +
              min +
              "/5 " +
              hour +
              " " +
              day +
              " " +
              month +
              " ? " +
              year +
              ")";
            var eventPayload = {
              customStatusId: statusReturned._id,
              ruleName: createRule,
              userId: loggedInUser._id,
            };
            await CloudWatchRuleClient.createCloudWatchEvent(
              createRule,
              exp,
              eventPayload,
              process.env.STATUS_PROCESSOR_TOPIC_ARN
            );
          }
        }
      }

      res.status(200).json({
        success: true,
        message: "User status added successfully",
        data: [],
      });
    } catch (error) {
      if (error.code === 11000) {
        var err = new Error("customId is must be unique.");
        return logError(err, req, res);
      } else {
        return logError(error, req, res);
      }
    }
  }
  async update(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
      let body: any = req.body;
      var utcDate = moment().utc();
      var dateName = utcDate.format("DD_MM_YYYY");

      if (body.status && body.status.length) {
        const length: number = body.status.length;
        for (let i = 0; i < length; i++) {
          if (body.status[i].is_deleted) {
            var custStatus: any = await customStatus.find({
              customId: body[i].customId,
              user: loggedInUser._id,
            });
            var ruleName =
              dateName +
              "_" +
              (loggedInUser._id ? "_" + loggedInUser._id : "") +
              "_" +
              (body.status[i].customId
                ? body.status[i].customId
                : custStatus.status + "_" + custStatus.substatus);
            await CloudWatchRuleClient.deleteRule(ruleName);
            await customStatus.findOneAndRemove({
              customId: body.status[i].customId,
              user: loggedInUser._id,
            });
          } else {
            if (body.status[i].RRULE) {
              const rruleData: any = body.status[i].RRULE;
              if (
                rruleData.excludeDates != null &&
                rruleData.excludeDates.length > 0
              ) {
                let date1 = rruleData.excludeDates.map((x: any) =>
                  new Date(x).toISOString()
                );
                body.status[i].RRULE.excludeDates = date1;
              }
            }
            var payload = {
              ...body.status[i],
              has_processed: false,
            };
            var statusReturned = await customStatus.findOneAndUpdate(
              { customId: body.status[i].customId, user: loggedInUser._id },
              payload,
              {
                upsert: true,
                new: true,
              }
            );
            var today = utcDate.format("YYYY-MM-DD");
            var createTrigger =
              (moment(body.status[i].start_date) <
                moment(utcDate).add(24, "hours") &&
                moment(body.status[i].start_date) > moment(utcDate) &&
                moment(body.status[i].end_date) > moment(utcDate)) ||
              (body.status[i].RRULE != null &&
                (body.status[i].RRULE.end_date == null ||
                  body.status[i].RRULE.end_date == "" ||
                  moment(body.status[i].RRULE.end_date) > utcDate) &&
                (body.status[i].RRULE.excludeDates == null ||
                  body.status[i].RRULE.excludeDates.length == 0 ||
                  body.status[i].RRULE.excludeDates.indexOf(
                    moment(today).toDate()
                  ) == -1));
            var ruleName =
              dateName +
              "_" +
              (loggedInUser._id ? "_" + loggedInUser._id : "") +
              "_" +
              (body.status[i].customId
                ? body.status[i].customId
                : body.status[i].status + "_" + body.status[i].substatus);
            await CloudWatchRuleClient.deleteRule(ruleName);
            if (createTrigger) {
              var createRule = ruleName + "_TRIGGER";
              //5/5 * 25 05 ? 2022
              var hour = utcDate.format("HH");
              var min = utcDate.format("mm");
              var month = utcDate.format("MM");
              var day = utcDate.format("DD");
              var year = utcDate.format("YYYY");
              var exp =
                "cron(" +
                min +
                "/5 " +
                hour +
                " " +
                day +
                " " +
                month +
                " ? " +
                year +
                ")";
              var eventPayload = {
                customStatusId: statusReturned._id,
                ruleName: createRule,
                userId: loggedInUser._id,
              };
              await CloudWatchRuleClient.createCloudWatchEvent(
                createRule,
                exp,
                eventPayload,
                process.env.STATUS_PROCESSOR_TOPIC_ARN
              );
            }
          }
        }
      }
      if (body.workLife) {
        const worklifeData: any = body.workLife;
        let date1 = worklifeData.Excluded_dates.map((x: any) =>
          new Date(x).toISOString()
        );
        var today = utcDate.format("YYYY-MM-DD");
        if (date1.indexOf(today) >= 0) {
          var ruleName =
            dateName +
            "_" +
            (loggedInUser._id ? "_" + loggedInUser._id : "") +
            "_WorkLife";
          await CloudWatchRuleClient.deleteRule(ruleName);
        }
        const update = await WorkLifeBalance.findOneAndUpdate(
          { user: loggedInUser._id },
          { excluded_dates: date1 },
          {
            upsert: true,
            new: true,
          }
        );
      }

      res.status(200).json({
        success: true,
        message: "User status update successfully",
        data: [],
      });
    } catch (error) {
      return logError(error, req, res);
    }
  }
  async delteStatus(req: Request, res: Response) {
    try {
      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
      await customStatus.findOneAndUpdate(
        { _id: req.params.id, user: loggedInUser._id },
        { is_deleted: true },
        {
          upsert: true,
          new: true,
        }
      );
      res.status(200).json({
        success: true,
        message: "User status deleted successfully",
        data: [],
      });
    } catch (error) {
      return logError(error, req, res);
    }
  }
  async get(req: Request, res: Response) {
    try {
      let page: any = req.query.page;
      let limit: any = req.query.limit;
      let where,
        timestamp: any = req.query.timestamp;
      if (timestamp) {
        where = {
          start_date: { $gte: new Date(timestamp).toISOString() },
        };
      }

      const reqPayload: any = req;
      const loggedInUser: any = reqPayload.body.user;
      const getStatus: any = await customStatus.aggregate([
        {
          $match: {
            user: loggedInUser._id,
            start_date: { $gte: new Date(timestamp) },
          },
        },
        {
          $lookup: {
            from: "userstatus",
            localField: "status",
            foreignField: "_id",
            as: "userStatus",
          },
        },
        { $unwind: { path: "$userStatus", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "usersubstatuses",
            localField: "substatus",
            foreignField: "_id",
            as: "userSubStatus",
          },
        },
        {
          $unwind: { path: "$userSubStatus", preserveNullAndEmptyArrays: true },
        },
        {
          $skip: page > 0 ? +limit * (+page - 1) : 0,
        },
        {
          $limit: +limit || 20,
        },
      ]);

      const worklife: any = await WorkLifeBalance.findOne(
        { user: loggedInUser._id },
        { excluded_dates: 1, _id: 0 }
      );

      res.status(200).json({
        sucess: true,
        message: "getdata successfully",
        data: {
          status: getStatus,
          worklife: {
            excluded_dates: worklife ? worklife.excluded_dates : null,
          },
        },
      });
    } catch (error) {
      return logError(error, req, res);
    }
  }

  async expandAndSetRuleForCustomStatus(req: Request, res: Response) {
    try {
      var referenceTIme = moment().utc();
      var utcDate = referenceTIme;
      var dateName = utcDate.format("DD_MM_YYYY");
      var refStatusId = req.body?.data?.customStatusId;
      var ruleNameForStatusUpdates = req.body?.data?.ruleName;
      var createdUserId = req.body?.data?.userId;
      var today = utcDate.format("YYYY-MM-DD");
      var diff = utcDate.diff(moment(today), "minutes");
      if (diff <= 15 || (refStatusId != null && createdUserId != null)) {
        //Non recurring status
        let where = {
          $and: [
            {
              start_date: {
                $lte: moment(utcDate)
                  .add(24, "hours")
                  .toISOString(),
              },
            },
            { start_date: { $gte: utcDate.toDate() } },
            { end_date: { $gte: utcDate.toDate() } },
            {
              $or: [
                { has_processed: { $exists: false } },
                { has_processed: false },
              ],
            },
            { _id: refStatusId ? refStatusId : { $exists: true } },
            { user: createdUserId ? createdUserId : { $exists: true } },
            {
              $or: [
                { RRULE: { $exists: false } },
                { RRULE: null },
                { RRULE: "" },
              ],
            },
          ],
        };
        const getStatus: any = await customStatus.find(where);
        for (const nonrecurring of getStatus) {
          var startDateTime = nonrecurring.start_date;
          var userId = nonrecurring.user;
          var end_date = nonrecurring.end_date;
          var customName = nonrecurring.customId;
          var statusId = nonrecurring.status;
          var subStatusId = nonrecurring.substatus;
          var schedulingTime = moment(startDateTime, "ddd DD/MM/YYYY, hh:mm A");
          var hour = schedulingTime.format("HH");
          var min = schedulingTime.format("mm");
          var month = utcDate.format("MM");
          var day = utcDate.format("DD");
          var year = utcDate.format("YYYY");
          var ruleName =
            dateName +
            "_" +
            (userId ? "_" + userId : "") +
            "_" +
            (customName ? customName : statusId + "_" + subStatusId);
          var exp =
            "cron(" +
            min +
            " " +
            hour +
            " " +
            day +
            " " +
            month +
            " ? " +
            year +
            ")";
          var payload = {
            rule: ruleName,
            status_type: "CUSTOM",
            customStatusId: nonrecurring.customId,
            notes: nonrecurring.notes,
            is_deleted: false,
            end_date: end_date,
            user: userId,
          };
          await CloudWatchRuleClient.createCloudWatchEvent(
            ruleName,
            exp,
            payload,
            process.env.EVENT_PROCESSOR_TOPIC_ARN
          );
          await customStatus.findByIdAndUpdate(
            nonrecurring._id,
            { has_processed: true },
            {
              upsert: true,
              new: true,
            }
          );
        }

        //Recurring Status

        let whereRecurring = {
          $and: [
            {
              start_date: {
                $lte: moment(utcDate)
                  .add(24, "hours")
                  .toISOString(),
              },
            },
            { RRULE: { $exists: true } },
            {
              $or: [
                { has_processed: { $exists: false } },
                { has_processed: false },
              ],
            },
            { _id: refStatusId ? refStatusId : { $exists: true } },
            {
              $or: [
                { "RRULE.end_date": { $exists: false } },
                { "RRULE.end_date": "" },
                { "RRULE.end_date": { $gte: utcDate.toDate() } },
              ],
            },
            {
              $or: [
                { "RRULE.excludeDates": { $exists: false } },
                { "RRULE.excludeDates": { $nin: [moment(today).toDate()] } },
              ],
            },
            { user: createdUserId ? createdUserId : { $exists: true } },
          ],
        };
        const getStatusResurring: any = await customStatus.find(whereRecurring);
        for (const recurringstatus of getStatusResurring) {
          var rRule = recurringstatus.RRULE;
          var startTime = rRule.startTime;
          var userId = recurringstatus.user;
          var freq = rRule.frequency;
          var diffDate = moment(recurringstatus.end_date).diff(
            moment(recurringstatus.start_date),
            "days"
          );
          var endTime = moment(
            utcDate.add(diffDate, "days").format("YYYY-MM-DD") +
              " " +
              rRule.endTime
          ).toISOString();
          var customName = recurringstatus.customId;
          var statusId = recurringstatus.status;
          var subStatusId = recurringstatus.substatus;
          var startDate = recurringstatus.start_date;
          var createRule = false;
          if (freq == "DAILY") {
            //create the rule with start and endtime.
            createRule = true;
          } else if (freq == "MONTHLY") {
            var mothData = rRule.monthDate;
            var dateValue = mothData.date;
            var excatWeek = mothData.excatWeek;
            var oneveryWeek = mothData.onEveryWeek;
            var day = utcDate.format("DD");
            if (dateValue != null && dateValue.length > 0) {
              var utcDayIndex = parseInt(day);
              if (dateValue.indexOf(utcDayIndex) >= 0) {
                createRule = true;
              }
            } else if (excatWeek != null && excatWeek.length > 0) {
              var dayValue = mothData.day;
              if (dayValue != null && dayValue.length > 0) {
                var dayIndex = utcDate.day() + 1;
                var weekIndex = Math.ceil(utcDate.date() / 7);
                if (
                  dayValue.indexOf(dayIndex) >= 0 &&
                  excatWeek.indexOf(weekIndex) >= 0
                ) {
                  createRule = true;
                }
              }
            } else if (oneveryWeek != null && oneveryWeek.length > 0) {
              var dayValue = mothData.day;
              if (dayValue != null && dayValue.length > 0) {
                var dayIndex = utcDate.day() + 1;
                var weekIndex = Math.ceil(utcDate.date() / 7);
                if (dayValue.indexOf(dayIndex) >= 0) {
                  // find the first occured date
                  var dateIteration = moment(startDate);
                  for (var i = 1; i <= 7; i++) {
                    var dayIndex = dateIteration.day() + 1;
                    if (dayValue.indexOf(dayIndex) >= 0) {
                      break;
                    }
                    dateIteration.add(1, "days");
                  }
                  if (dateIteration <= utcDate) {
                    var diff = moment(utcDate)
                      .add(24, "hours")
                      .diff(dateIteration, "days");
                    var noOfWeeks = Math.ceil(diff / 7);
                    for (var i = 0; i < oneveryWeek.length; i++) {
                      var index = oneveryWeek[i];
                      if (noOfWeeks % index == 0) {
                        createRule = true;
                        break;
                      }
                    }
                  } else if (dateIteration < moment(utcDate).add(24, "hours")) {
                    createRule = true;
                  }
                }
              }
            }
          } else if (freq == "WEEKLY") {
            var weekday = rRule.weekDay.day;
            var dayIndex = utcDate.day() + 1;
            if (
              weekday != null &&
              weekday.length > 0 &&
              weekday.indexOf(dayIndex) >= 0
            ) {
              createRule = true;
            }
          } else if (freq == "YEARLY") {
            var yearDate = rRule.yearDate;
            var dateValue = yearDate.date;
            var excatMonth = yearDate.excatMonth;
            var onEveryMonth = yearDate.onEveryMonth;
            var day = utcDate.format("DD");
            if (
              dateValue != null &&
              dateValue.length > 0 &&
              (excatMonth == null || excatMonth.length <= 0) &&
              (onEveryMonth == null || onEveryMonth.length <= 0)
            ) {
              var utcDayIndex = parseInt(day);
              if (dateValue.indexOf(utcDayIndex) >= 0) {
                createRule = true;
              }
            } else if (excatMonth != null && excatMonth.length > 0) {
              var dayIndex = utcDate.day() + 1;
              var weekIndex = Math.ceil(utcDate.date() / 7);
              var monthIndex = utcDate.month() + 1;
              if (excatMonth.indexOf(monthIndex) >= 0) {
                if (dateValue != null && dateValue.length > 0) {
                  var utcDayIndex = parseInt(day);
                  if (dateValue.indexOf(utcDayIndex) >= 0) {
                    createRule = true;
                  }
                } else {
                  var dayValue = yearDate.day;
                  if (
                    dayValue != null &&
                    dayValue.length > 0 &&
                    yearDate.excatWeek != null &&
                    yearDate.excatWeek.length > 0
                  ) {
                    var excatWeek = yearDate.excatWeek;
                    if (
                      dayValue.indexOf(dayIndex) >= 0 &&
                      excatMonth.indexOf(monthIndex) >= 0 &&
                      excatWeek.indexOf(weekIndex) >= 0
                    ) {
                      createRule = true;
                    }
                  }
                }
              }
            } else if (onEveryMonth != null && onEveryMonth.length > 0) {
              if (dateValue != null && dateValue.length > 0) {
                var utcDayIndex = parseInt(day);
                if (dateValue.indexOf(utcDayIndex) >= 0) {
                  var dateIteration = moment(startDate);
                  var days = dateIteration.daysInMonth();
                  for (var i = 1; i <= days; i++) {
                    if (dateValue.indexOf(i) >= 0) {
                      break;
                    }
                    dateIteration.add(1, "days");
                  }
                  if (dateIteration < utcDate) {
                    var utcMont =
                      moment(utcDate)
                        .add(24, "hours")
                        .month() + 1;
                    var eventStartDateMont = dateIteration.month() + 1;
                    var noOfmont =
                      utcMont > eventStartDateMont
                        ? utcMont - eventStartDateMont
                        : eventStartDateMont - utcMont;

                    for (var i = 0; i < onEveryMonth.length; i++) {
                      var index = onEveryMonth[i];
                      if (noOfmont % index == 0) {
                        createRule = true;
                        break;
                      }
                    }
                  } else if (dateIteration < moment(utcDate).add(24, "hours")) {
                    createRule = true;
                  }
                }
              } else {
                var dayValue = yearDate.day;
                var dayIndex = utcDate.day() + 1;
                var weekIndex = Math.ceil(utcDate.date() / 7);
                var monthIndex = utcDate.month() + 1;
                if (
                  dayValue != null &&
                  dayValue.length > 0 &&
                  yearDate.excatWeek != null &&
                  yearDate.excatWeek.length > 0
                ) {
                  var excatWeek = yearDate.excatWeek;
                  if (
                    dayValue.indexOf(dayIndex) >= 0 &&
                    excatWeek.indexOf(weekIndex) >= 0
                  ) {
                    //find first occurence
                    var dateIteration = moment(startDate);
                    var days = dateIteration.daysInMonth();
                    for (var i = 1; i <= days; i++) {
                      var dayIndex = dateIteration.day() + 1;
                      var wkIndex = Math.ceil(dateIteration.date() / 7);
                      if (
                        dayValue.indexOf(dayIndex) >= 0 &&
                        excatWeek.indexOf(wkIndex) >= 0
                      ) {
                        break;
                      }
                      dateIteration.add(1, "days");
                    }

                    if (dateIteration < utcDate) {
                      var utcMont =
                        moment(utcDate)
                          .add(24, "hours")
                          .month() + 1;
                      var eventStartDateMont = dateIteration.month() + 1;
                      var noOfmont =
                        utcMont > eventStartDateMont
                          ? utcMont - eventStartDateMont
                          : eventStartDateMont - utcMont;

                      for (var i = 0; i < onEveryMonth.length; i++) {
                        var index = onEveryMonth[i];
                        if (noOfmont % index == 0) {
                          createRule = true;
                          break;
                        }
                      }
                    } else if (
                      dateIteration < moment(utcDate).add(24, "hours")
                    ) {
                      createRule = true;
                    }
                  }
                }
              }
            }
          }
          if (createRule) {
            var schedulingTime = moment(startTime, "hh:mm A");
            var hour = schedulingTime.format("HH");
            var min = schedulingTime.format("mm");
            var month = utcDate.format("MM");
            var day = utcDate.format("DD");
            var year = utcDate.format("YYYY");
            var ruleName =
              dateName +
              "_" +
              (userId ? "_" + userId : "") +
              "_" +
              (customName ? customName : statusId + "_" + subStatusId);
            var exp =
              "cron(" +
              min +
              " " +
              hour +
              " " +
              day +
              " " +
              month +
              " ? " +
              year +
              ")";
            var payloadRecurring = {
              rule: ruleName,
              status_type: "CUSTOM",
              customStatusId: recurringstatus.customId,
              notes: recurringstatus.notes,
              is_deleted: false,
              user: userId,
              end_date: endTime,
            };
            await CloudWatchRuleClient.createCloudWatchEvent(
              ruleName,
              exp,
              payloadRecurring,
              process.env.EVENT_PROCESSOR_TOPIC_ARN
            );
            await customStatus.findByIdAndUpdate(
              recurringstatus._id,
              { has_processed: true },
              {
                upsert: true,
                new: true,
              }
            );
          }
        }
        //Worklife Balances
        if (refStatusId == null) {
          var dayIndex = utcDate.day();
          let whereWorkBalance = {
            $and: [
              { user: createdUserId ? createdUserId : { $exists: true } },
              {
                $or: [
                  { excluded_dates: { $exists: false } },
                  { excluded_dates: { $nin: [moment(today).toDate()] } },
                ],
              },
            ],
          };
          const worklife: any = await WorkLifeBalance.find(whereWorkBalance);
          for (const wrkLife of worklife) {
            if (wrkLife.days != null) {
              var wldays: any = wrkLife.days;
              var processworkLife = true;
              switch (dayIndex) {
                case 0:
                  if (!wldays.monday) {
                    processworkLife = false;
                  }
                  break;
                case 1:
                  if (!wldays.tuesday) {
                    processworkLife = false;
                  }
                  break;
                case 2:
                  if (!wldays.wednesday) {
                    processworkLife = false;
                  }
                  break;
                case 3:
                  if (!wldays.thursday) {
                    processworkLife = false;
                  }
                  break;
                case 4:
                  if (!wldays.friday) {
                    processworkLife = false;
                  }
                  break;
                case 5:
                  if (!wldays.saturday) {
                    processworkLife = false;
                  }
                  break;
                case 6:
                  if (!wldays.sunday) {
                    processworkLife = false;
                  }
                  break;
              }
              if (!processworkLife) continue;
            }
            var schedulingTime = moment(wrkLife.start_time, "hh:mm A");
            var endDateTime = moment(
              utcDate.format("YYYY-MM-DD") + " " + wrkLife.end_time
            ).toISOString();
            var hour = schedulingTime.format("HH");
            var min = schedulingTime.format("mm");
            var month = utcDate.format("MM");
            var day = utcDate.format("DD");
            var year = utcDate.format("YYYY");
            var ruleName =
              dateName + "_" + (userId ? "_" + userId : "") + "_WorkLife";
            var exp =
              "cron(" +
              min +
              " " +
              hour +
              " " +
              day +
              " " +
              month +
              " ? " +
              year +
              ")";
            var payloadworklife = {
              rule: ruleName,
              status_type: "WORKLIFE_BALANCE",
              statusId: wrkLife.status,
              subStatusId: wrkLife.sub_status,
              notes: wrkLife.notes,
              user: userId,
              is_deleted: false,
              end_date: endDateTime,
            };
            await CloudWatchRuleClient.createCloudWatchEvent(
              ruleName,
              exp,
              payloadworklife,
              process.env.EVENT_PROCESSOR_TOPIC_ARN
            );
          }
        }
        if (ruleNameForStatusUpdates) {
          await CloudWatchRuleClient.deleteRule(ruleNameForStatusUpdates);
        }
      }
      res.status(200).json({
        sucess: true,
        message: "triggered rules successfully",
      });
    } catch (error) {
      return logError(error, req, res);
    }
  }
}

export default CustomStatusController;
