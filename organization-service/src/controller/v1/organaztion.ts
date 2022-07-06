import { Types } from "mongoose";
import { Request, Response } from "express";
import { Organization } from "../../models/organization";
import { UserSubscription } from "../../models/user_subscription";
import { Coupon } from "../../models/coupon";
import { User } from "../../models/user";
import moment from "moment";
import { CustomStatus } from "../../models/custom-status";
import { UserDevices } from "../../models/user-device";
import { Parser } from "json2csv";
import { Usage } from "../../models/usage";
import { CallActivity } from "../../models/call_activity";
import { uploadImage } from "../../utils/aws";
import jwt from "jsonwebtoken";
import WisecallerEmail from "@wisecaller/email";
import { logError } from "@wisecaller/logger";
import fs from "fs";

class OrganizationController {
  async getOrganization(req: Request, res: Response) {
    try {
      let request: any = req;
      if (request.user.role != "ADMIN") {
        throw new Error("unauthorized");
      }
      let { search, _id, limit, page, name, email, phone_no }: any =
        request.query;

      let whereClause = {};
      if (search) {
        search = new RegExp(search, "ig");
        whereClause = {
          $or: [{ name: search }, { email: search }, { phone_no: search }],
        };
      }
      if (_id) {
        whereClause = { ...whereClause, _id };
      }
      if (name) {
        whereClause = { ...whereClause, name };
      }
      if (email) {
        whereClause = { ...whereClause, email };
      }
      if (phone_no) {
        whereClause = { ...whereClause, phone_no };
      }
      const organaztionList = await Organization.find(whereClause)
        .skip(page > 0 ? +limit * (+page - 1) : 0)
        .limit(+limit || 20);
      res.status(200).json({ success: true, data: organaztionList });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
  async updateOrganization(req: Request, res: Response) {
    try {
      let request: any = req;
      if (request.user.role != "ADMIN") {
        throw new Error("unauthorized");
      }
      const requestParams = req.params;
      let _id = requestParams.id;
      let updatePayload = req.body;
      Organization.findOneAndUpdate(
        { _id },
        { ...updatePayload },
        {
          upsert: true,
          new: false,
        }
      );
      res
        .status(200)
        .json({ success: true, message: "Organazation update successful" });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
  async deleteOrganization(req: Request, res: Response) {
    try {
      let request: any = req;
      if (request.user.role != "ADMIN") {
        throw new Error("unauthorized");
      }
      const requestParams = request.params;
      let _id = requestParams.id;

      await Organization.findByIdAndRemove(_id);
      return res
        .status(200)
        .json({ success: true, message: "Organization deleted successful" });
    } catch (err: any) {
      if (err.message === "UNAUTHORIZE") {
        res.status(401).json({ success: false, message: err.message });
      } else {
        res.status(500).json({ success: false, message: err.message });
      }
    }
  }
  async reportOrganization(req: Request, res: Response) {
    try {
      const request: any = req;
      const user = request.user;
      if (user.role === "ADMIN") {
        let { id } = request.params;
        let organazation: any = await UserSubscription.find({
          organization: id,
        });
        res
          .status(200)
          .json({ success: true, message: "success", organazation });
      } else {
        throw new Error("UNAUTHORIZE");
      }
    } catch (err: any) {
      if (err.message === "UNAUTHORIZE") {
        res.status(401).json({ success: false, message: err.message });
      } else {
        res.status(500).json({ success: false, message: err.message });
      }
    }
  }
  async organazationCoupon(req: Request, res: Response) {
    try {
      const request: any = req;
      const user = request.user;
      if (user.role === "ADMIN") {
        let { id } = request.params;

        let organazation: any = await Coupon.find({
          organization: id,
        });
        res
          .status(200)
          .json({ success: true, message: "success", organazation });
      } else {
        throw new Error("UNAUTHORIZE");
      }
    } catch (err: any) {
      if (err.message === "UNAUTHORIZE") {
        res.status(401).json({ success: false, message: err.message });
      } else {
        res.status(500).json({ success: false, message: err.message });
      }
    }
  }
  async getOrganizationProfile(req: Request, res: Response) {
    try {
      let request: any = req.body;
      let organization = await Organization.findOne({ _id: request.user._id });
      return res.status(200).json({ success: true, data: organization });
    } catch (error: any) {
      return res.status(200).json({ success: false, error: error.message });
    }
  }

  async index(req: Request, res: Response) {
    try {
      let sort_key = req.body.sort_key || "name";
      let sort_direction = req.body.sort_direction === "DESC" ? -1 : 1;
      let criteria = {
        role: "ORGANIZATION",
      };

      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
      };

      if (req.body.search) {
        Object.assign(criteria, {
          name: { $regex: req.body.search, $options: "i" },
        });
      }

      if (req.body.filtered_date) {
        Object.assign(criteria, {
          cretedAt: {
            $gte: req.body.filtered_date[0],
            $lte: req.body.filtered_date[1],
          },
        });
      }

      if (req.body.register_end_date) {
        Object.assign(criteria, {
          cretedAt: { $gte: req.body.register_end_date },
        });
      }

      const organizations =
        req.body.page || req.body.limit
          ? await Organization.paginate(criteria, options)
          : await Organization.find(criteria);
      return res.status(200).json({ success: true, data: organizations });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async updateOrganizationProfile(req: Request, res: Response) {
    try {
      let loggedInUser: any = req.body.user;
      let organization: any = {};
      let paymentUrl: string = "";
      let payload = {
        ...req.body,
        address_details: {
          address: req.body.address || "",
          city: req.body.city || "",
          state: req.body.state || "",
          country: req.body.country || "",
        },
        contact_information: {
          name: req.body.contact_name || "",
          email: req.body.contact_email || "",
          phone_no: req.body.contact_phone || "",
        },
      };
      delete payload.user;
      if (req.file && req.file instanceof Object) {
        let imageUrl = await uploadImage(req.file.path, req.file.filename);
        fs.unlinkSync(req.file.path);
        Object.assign(payload, { profile: imageUrl });
      }

      if (loggedInUser?.role === "ADMIN") {
        organization = new Organization(payload);
        let secret: any = process.env.JWT_SECRET;
        let paymentToken = jwt.sign(
          {
            _id: organization._id,
            ...payload,
          },
          secret,
          {
            expiresIn: "24h",
          }
        );

        organization.save();
        paymentUrl = `${process.env.FRONTEND_URL}organization/payment?token=${paymentToken}`;
        let message: string = `<p>Here is the payment link for the further procedure\n Url: ${paymentUrl}</p>`;

        await WisecallerEmail.Send(
          organization.email,
          "Welcome to Wisecaller",
          message
        );
        return res
          .status(200)
          .json({ success: true, data: organization, paymentUrl: paymentUrl });
      } else {
        organization = await Organization.findOneAndUpdate(
          { _id: payload._id },
          payload,
          { upsert: true, new: true }
        );
        return res.status(200).json({ success: true, data: organization });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async organizationOverviewSummary(req: Request, res: Response) {
    try {
      let loggedInUser = req.body.user;
      let payload = {
        ...req.body,
      };

      delete payload.user;
      delete payload.token;
      let user_criteria = {
        isActive: true,
      };
      let coupon_criteria = {};
      let device_criteria = {};
      let report_criteria = {
        createdAt: {
          $gte: new Date(
            moment().startOf("year").utc(true).startOf("day").toISOString()
          ),
        },
        role: "ORGANIZATION",
      };

      let usage_criteria = {
        loggedOn: {
          $gte: moment().startOf("month").utc(true).toDate(),
          $lte: moment().endOf("month").utc(true).toDate(),
        },
      };
      let activity_criteria = {
        calledOn: {
          $gte: moment().startOf("month").utc(true).toDate(),
          $lte: moment().endOf("month").utc(true).toDate(),
        },
      };

      let organization_criteria = {
        role: "ORGANIZATION",
      };

      if (loggedInUser?.role === "ORGANIZATION") {
        Object.assign(user_criteria, {
          "active_subscriptions.organization": loggedInUser._id,
        });

        Object.assign(report_criteria, {
          "active_subscriptions.organization": loggedInUser._id,
        });

        Object.assign(coupon_criteria, {
          organization: loggedInUser._id,
        });
      }

      if (payload.filtered_date) {
        Object.assign(report_criteria, {
          createdAt: {
            $gte: moment(payload.filtered_date[0]).toDate(),
            $lte: moment(payload.filtered_date[1]).toDate(),
          },
        });

        Object.assign(user_criteria, {
          createdAt: {
            $gte: moment(payload.filtered_date[0]).toDate(),
            $lte: moment(payload.filtered_date[1]).toDate(),
          },
        });

        Object.assign(organization_criteria, {
          createdAt: {
            $gte: moment(payload.filtered_date[0]).toDate(),
            $lte: moment(payload.filtered_date[1]).toDate(),
          },
        });

        Object.assign(coupon_criteria, {
          createdAt: {
            $gte: moment(payload.filtered_date[0]).toDate(),
            $lte: moment(payload.filtered_date[1]).toDate(),
          },
        });
      }

      if (payload.organization) {
        Object.assign(user_criteria, {
          $or: [{ "active_subscriptions.organization": payload.organization }],
        });
        Object.assign(coupon_criteria, { organization: payload.organization });
        Object.assign(report_criteria, { _id: payload.organazation });
        Object.assign(organization_criteria, { _id: payload.organization });
        let users = await User.find(user_criteria, { _id: 1 });
        console.log(users);
        Object.assign(activity_criteria, {
          $or: [{ caller: { $in: users } }, { receiver: { $in: users } }],
        });
      }

      let getTotalEmployees = User.find(user_criteria, { _id: 1 });
      let getReportEmployees = User.find(report_criteria).countDocuments();
      let getTotalCoupons = Coupon.find(coupon_criteria).countDocuments();
      let getTotalWorkLifeBalance = User.find({
        ...user_criteria,
        "modes.workLifeBalance.is_active": true,
      }).countDocuments();
      let getTotalRoadSafety = User.find({
        ...user_criteria,
        "modes.roadSafety.is_active": true,
      }).countDocuments();

      let getTotalCalenderSync = User.find({
        ...user_criteria,
        "modes.syncCalender.calenders": { $ne: null },
      }).countDocuments();

      let getMonthlyUsers = User.aggregate([
        {
          $match: {
            ...user_criteria,
          },
        },
        {
          $group: {
            _id: {
              month: { $month: "$createdAt" },
              year: { $year: "$createdAt" },
            },
            count: { $sum: 1 },
          },
        },
        {
          $sort: { "_id.month": 1 },
        },
      ]);

      let getTotalOrganizatiions = Organization.find(
        organization_criteria
      ).countDocuments();

      let getMonthlyOrganizaion = Organization.aggregate([
        {
          $match: {
            ...report_criteria,
          },
        },
        {
          $group: {
            _id: {
              month: { $month: "$createdAt" },
              year: { $year: "$createdAt" },
            },
            count: { $sum: 1 },
          },
        },
        {
          $sort: { "_id.month": 1 },
        },
      ]);

      let getDailyUsage = Usage.aggregate([
        {
          $match: {
            ...usage_criteria,
          },
        },
        {
          $group: {
            _id: { $dayOfMonth: "$loggedOn" },
            count: { $sum: 1 },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);

      let getTotalUsage = Usage.find(usage_criteria).countDocuments();
      let getCallActivity = CallActivity.aggregate([
        {
          $match: {
            ...activity_criteria,
          },
        },
        {
          $group: {
            _id: { called_on: { $dayOfMonth: "$calledOn" }, status: "$status" },
            count: { $sum: 1 },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);

      let getTotalCallActivity =
        CallActivity.find(activity_criteria).countDocuments();

      let [
        totalEmployees,
        totalCoupons,
        totalWorkLifeBalance,
        totalRoadSafety,
        totalCalendarSync,
        monthlyUsers,
        monthlyOrganization,
        totalOrganization,
        reportEmployees,
        dailyUsage,
        totalDailyUsage,
        callActivity,
        totalCallActivity,
      ] = await Promise.all([
        getTotalEmployees,
        getTotalCoupons,
        getTotalWorkLifeBalance,
        getTotalRoadSafety,
        getTotalCalenderSync,
        getMonthlyUsers,
        getMonthlyOrganizaion,
        getTotalOrganizatiions,
        getReportEmployees,
        getDailyUsage,
        getTotalUsage,
        getCallActivity,
        getTotalCallActivity,
      ]);

      if (loggedInUser.role === "ORGANIZATION") {
        Object.assign(device_criteria, {
          user: { $in: totalEmployees.map((item) => item._id) },
        });
      }

      let custom_statuses = await CustomStatus.find({});

      let totalCustomStatus = await User.find({
        ...user_criteria,
        _id: { $in: custom_statuses.map((item: any) => item.user) },
      }).countDocuments();

      let deviceSummary = await UserDevices.aggregate([
        { $match: device_criteria },
        {
          $group: {
            _id: "$user_device.platform",
            count: { $sum: 1 },
          },
        },
      ]);

      let data = {
        totalEmployees: totalEmployees.length,
        totalCoupons,
        totalWorkLifeBalance,
        totalRoadSafety,
        totalCalendarSync,
        monthlyUsers,
        totalCustomStatus,
        deviceSummary,
        monthlyOrganization,
        totalOrganization,
        reportEmployees,
        dailyUsage,
        totalDailyUsage,
        callActivity,
        totalCallActivity,
      };

      return res.status(200).json({ success: true, data });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async deleteAdminOrganizaion(req: Request, res: Response) {
    try {
      let organization: any = await Organization.findOne({
        _id: req.params.id,
      });
      await Coupon.deleteMany({ organization: organization._id });
      let users = await User.find({
        "active_subscriptions.organization": organization._id,
      });
      if (users.length) {
        await User.updateMany(
          {
            "active_subscriptions.organization": organization._id,
          },
          {
            $pull: { active_subscriptions: { organization: organization._id } },
          },
          { upsert: true, new: true }
        );
      }
      await Organization.findOneAndRemove({ _id: organization._id });
      return res
        .status(200)
        .json({ success: true, message: "Organization deleted successfully" });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async exportCSV(req: Request, res: Response) {
    try {
      let criteria = {
        role: "ORGANIZATION",
      };

      if (req.body.search) {
        Object.assign(criteria, {
          name: { $regex: req.body.search, $options: "i" },
        });
      }

      if (req.body.register_start_date) {
        Object.assign(criteria, {
          cretedAt: { $gte: req.body.register_start_date },
        });
      }

      if (req.body.register_end_date) {
        Object.assign(criteria, {
          cretedAt: { $gte: req.body.register_end_date },
        });
      }

      let organazations = await Organization.find(criteria);
      let csv_data = [];
      for (const item of organazations) {
        let temp: any = item;
        let organization = {
          name: temp.name,
          contact_name: temp.contact_information.name,
          phone_no: temp.contact_information.phone_no,
          email: temp.email,
          gst: temp.gst,
          pan: temp.pan,
        };
        csv_data.push(organization);
      }

      let fields = [
        {
          label: "NAME",
          value: "name",
          default: "",
        },
        {
          label: "CONTACT NAME",
          value: "contact_name",
          default: "",
        },
        {
          label: "PHONE",
          value: "phone_no",
          default: "",
        },

        {
          label: "EMAIL",
          value: "email",
          default: "",
        },
        {
          label: "GST",
          value: "gst",
          default: "",
        },
        {
          label: "PAN",
          value: "pan",
          default: "",
        },
      ];

      let parser = new Parser({ fields: fields });
      let parsed_data = parser.parse(csv_data);
      return res.status(200).json({ success: true, data: parsed_data });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async regeneratePaymentToken(req: Request, res: Response) {
    try {
      let secret: any = process.env.JWT_SECRET;
      let paymentUrl: string = "";
      let payload = {
        ...req.body,
      };
      delete payload.user;

      Object.assign(payload, {
        address: payload.address_details.address,
        city: payload.address_details.city,
        state: payload.address_details.state,
        country: payload.address_details.country,
      });

      let paymentToken = jwt.sign(
        {
          _id: payload._id,
          ...payload,
        },
        secret,
        {
          expiresIn: "24h",
        }
      );

      paymentUrl = `${process.env.FRONTEND_URL}organization/payment?token=${paymentToken}`;
      return res.status(200).json({ success: true, paymentUrl: paymentUrl });
    } catch (error) {
      logError(error, req, res);
    }
  }

  async uploadImageAws(req: Request, res: Response) {
    try {
      let url = await uploadImage(
        String(req.file?.path),
        String(req.file?.filename),
        req.body.type
      );

      fs.unlinkSync(String(req.file?.path));
      return res.status(200).json({ success: true, data: url });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default OrganizationController;
