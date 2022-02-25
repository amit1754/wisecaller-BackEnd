import { Request, Response } from "express";
import { User } from "../../models/user";
import { UserSubscription } from "../../models/user_subscription";

class UserController {
  async index(req: Request, res: Response) {
    try {
      let sort_key: any = req.body.sort_key || "first_name";
      let sort_direction: any =
        req.body.sort_direction && req.body.sort_direction === "DESC" ? -1 : 1;
      let options = {
        sort: { [sort_key]: sort_direction },
        page: Number(req.body.page) || 1,
        limit: Number(req.body.limit) || 10,
        populate: {
          path: "organization_subscription.subscription",
        },
      };

      let criteria = {};
      // console.log(req.body);

      if (req.body.role === "ORGANIZATION") {
        let subscriptions = await UserSubscription.find(
          {
            organization: req.body.user._id,
          },
          { user: 1, organization: 1 }
        );
        // console.log(subscriptions);

        subscriptions = subscriptions.map((item: any) => item.user);

        // console.log(subscriptions);

        Object.assign(criteria, { _id: { $in: subscriptions } });
      }
      console.log("criteria :" + JSON.stringify(criteria));
      let demoData = await User.find(criteria);
      console.log(demoData);

      let users =
        req.body.page || req.body.limit
          ? await User.paginate(criteria, options)
          : await User.find(criteria);
      return res.status(200).json({ success: true, data: users });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default UserController;
