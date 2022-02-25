import { Types } from "mongoose";
import { Request, Response } from "express";
import { Organization } from "../../models/organization";
import { UserSubscription } from "../../models/user_subscription";
import { Coupon } from "../../models/coupon";
import { User } from "../../models/user";

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
          organization: Types.ObjectId(id),
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
          organization: Types.ObjectId(id),
        });
        res
          .status(200)
          .json({ success: true, message: "success", organazation });
      } else {
        throw new Error("UNAUTHORIZE");
      }
    } catch (err: any) {
      console.log("err :>> ", err);
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
      let criteria = {};

      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
      };

      const organizations =
        req.body.page || req.body.limit
          ? await Organization.paginate(criteria, options)
          : await Organization.find(criteria);
      return res.status(200).json({ success: true, data: organizations });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default OrganizationController;
