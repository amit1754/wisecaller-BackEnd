import { Request, Response } from "express";
import { getUserBll } from "@wisecaller/user-service";
import VerifyJWTToken from "../../utils/verify-jwt";
import RazorPay from "razorpay";
import moment from "moment";
import { Payment } from "../../model/payment";
import { UserSubscription } from "../../model/user_subscription";
import { Subscription } from "../../model/subscription";
import { Coupon } from "../../model/coupon";
import emailClient from "@wisecaller/email";
import path from "path/posix";
const fs = require("fs");
const handlebars = require("handlebars");
import { v4 as uuidv4 } from "uuid";
const pdf = require("html-pdf");
import fileUpload from "../../middelware/s3";

class PaymentController {
  async index(req: Request, res: Response) {
    try {
      let token: any = req.headers.authorization;
      let vefied_token: any = VerifyJWTToken(token.split("Bearer ")[1]);
      let user: any = await getUserBll.findOneUser({ _id: vefied_token._id });
      let loggedInUser = req.body.user;
      let payload = {
        ...req.body,
      };

      delete payload.user;

      let subscription = await Subscription.findById(payload.subscription);
      let subscription_payload = {
        subscription: subscription._id,
        organization: subscription.organization,
        coupon_code: payload.coupon_code,
        quantity: 1,
        user: user._id,
        subscription_created_date: moment().toISOString(),
        subscription_end_date: moment()
          .add(subscription.duration, "months")
          .toISOString(),
        is_active: true,
        user_subscription_date: moment().toISOString(),
      };

      if (subscription.organization) {
        let organization_subscription = await UserSubscription.findOneAndUpdate(
          { user: user._id, organization: { $exists: true } },
          subscription_payload,
          {
            upsert: true,
            new: true,
          }
        );
        await getUserBll.findOneAndUpdate(
          { _id: user._id },
          { organization_subscription: organization_subscription },
          { upsert: true, new: true }
        );
      } else {
        let user_active_subscriptions = await UserSubscription.findOne({
          user: loggedInUser._id,
          subscription: payload.subscription,
          subscription_end_date: { $gte: moment().toISOString() },
          is_revoked: false,
        });
        let diff_days = moment(
          user_active_subscriptions.subscription_end_date
        ).diff(moment(), "days");
        subscription_payload.subscription_end_date = moment(
          subscription_payload.subscription_end_date
        )
          .add(diff_days, "days")
          .toISOString();
        let user_subscription = await UserSubscription.findOneAndUpdate(
          { user: user._id, organization: { $exists: false } },
          subscription_payload,
          {
            upsert: true,
            new: true,
          }
        );
        await getUserBll.findOneAndUpdate(
          { _id: user._id },
          { user_subscription: user_subscription },
          { upsert: true, new: true }
        );
      }

      let payment_payload = {
        ...req.body,
        user: user._id,
        payment_date: moment().toISOString(),
      };

      let payment = await Payment.findOneAndUpdate(
        { user: user._id, transactionId: payload.transactionId },
        payment_payload,
        { upsert: true, new: true }
      );

      return res.status(200).json({ success: true, data: payment });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async order(req: Request, res: Response) {
    try {
      const instance = new RazorPay({
        key_id: process.env.RAZORPAYKEY,
        key_secret: process.env.RAZORPAYSECRET,
      });

      let options = {
        amount: req.body.amount * 100,
        currency: "INR",
        receipt: moment().toISOString(),
      };

      let order = await instance.orders.create(options);
      return res.status(200).json({ success: true, data: order });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async paymentForOrganization(req: Request, res: Response) {
    try {
      let loggedInUser = req.body.user;
      let payload = {
        ...req.body,
      };
      delete payload.user;

      let coupon_payload = {
        coupon_code: payload.coupon_code,
        can_use_for: payload.quantity,
        organization: loggedInUser._id,
        subscription: payload.subscription,
        type: "ORGANIZATION",
        expires_at: payload.coupon_expiry_date,
      };

      let user_subscription_payload = {
        subscription: payload.subscription,
        organization: loggedInUser._id,
        coupon_code: payload.coupon_code,
        quantity: payload.quantity,
        subscription_created_date: moment().toISOString(),
        subscription_end_date: payload.coupon_expiry_date,
      };

      let user_subscription = new UserSubscription(user_subscription_payload);
      await user_subscription.save();

      let payment_payload = {
        ...req.body,
        subscription: payload.subscription,
        user_subscription: user_subscription._id,
        organization: loggedInUser._id,
        payment_date: moment().toISOString(),
      };

      let payment = await Payment.findOneAndUpdate(
        { user: loggedInUser._id, transactionId: payload.transactionId },
        payment_payload,
        { upsert: true, new: true }
      );

      await Coupon.findOneAndUpdate(
        { coupon_code: payload.coupon_code },
        coupon_payload,
        { upsert: true, new: true }
      );

      let mail_body = `<h3>COUPON CODE:  ${payload.coupon_code}`;
      await emailClient.Send(
        loggedInUser.email,
        "Organization Coupon",
        mail_body
      );
      return res.status(200).json({ success: true, data: payment });
    } catch (error: any) {
      console.log(error);
      return res.status(200).json({ success: false, message: error.message });
    }
  }
  async demo(req: Request, res: Response) {
    try {
      let request: any = req;
      let orderId = request.body.transactionId;
      let paymentDetails: any = await Payment.aggregate([
        {
          $match: { transactionId: orderId },
        },
        {
          $lookup: {
            from: "users",
            localField: "user",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
        {
          $lookup: {
            from: "usersubscriptions",
            localField: "subscription",
            foreignField: "_id",
            as: "subscription",
          },
        },
        {
          $unwind: "$subscription",
        },
      ]);

      let gst = 0;
      let payload: any = {
        id: uuidv4(),
        orderDate: moment().format("DD-MM-YYYY"),
        organazationName: "wisecaller Organazation",
        sellerName: "Wisecaller",
        paymentType: "Rozer Pay",
        product: {
          name: "subscription",
          price: 500,
        },
        subTotal: 500,
        gst: gst,
        total: 500,
      };

      let html = fs.readFileSync("./assets/invoices/invoice.html", "utf-8");
      let template = handlebars.compile(html);
      let compiledTemplate = template(payload);
      let filename = `${payload.id}.pdf`;
      let filepath = `/assets/pdfs/${filename}`;

      pdf.create(compiledTemplate, { format: "A4" });
      pdf
        .create(compiledTemplate, { format: "A4" })
        .toFile(
          path.resolve(`./${filepath}`),
          async (error: any, file: any) => {
            if (error) {
              return res
                .status(500)
                .json({ success: false, message: true, paymentDetails });
            } else {
              let upload: any = await fileUpload(file.filename, filename);
              console.log("::::", upload);
              // let attachment = fs.readFileSync(file.filename).toString("base64");

              // const msg :any= {
              //   to: 'test@example.com',
              //   from: 'test@example.com',
              //   subject: 'Sending with SendGrid is Fun',
              //   text: 'and easy to do anywhere, even with Node.js',
              //   attachments: [
              //     {
              //       content: attachment,
              //       filename: filename,
              //       type: "application/pdf",
              //       disposition: "attachment"
              //     }
              //   ]
              // };

              // let mail_body = `<h3>COUPON CODE:  ${payload.coupon_code}`;
              // await emailClient.Send(msg);
              res.status(200).send({ success: true, message: "success" });
            }
          }
        );
    } catch (err: any) {
      res.status(500).send({ success: false, message: err.message });
    }
  }

  async generateInvoice(req: Request, res: Response) {
    try {
      let payment = await Payment.findOne({ _id: req.body.invoice }).populate({
        path: "subscription",
        populate: [
          { path: "subscription" },
          { path: "user" },
          { path: "organization" },
        ],
      });

      let subscription = payment.subscription.subscription;
      let payload = {
        id: payment._id,
        payment_date: moment(payment.createdAt).format("DD-MM-YYYY"),
        plan_name: subscription.title,
        subscription_price: subscription.original_price,
        gst: (subscription.original_price * subscription.gst_percentage) / 100,
        total_amount:
          subscription.original_price +
          (subscription.original_price * subscription.gst_percentage) / 100,
      };

      let html = fs.readFileSync("./assets/invoices/invoice.html", "utf-8");
      let template = handlebars.compile(html);
      let compiledTemplate = template(payload);

      pdf
        .create(compiledTemplate, { format: "A4" })
        .toStream((error: any, stream: any) => {
          if (error) {
            return res
              .status(200)
              .json({ success: false, message: error.message });
          }
          let data = stream.pipe(fs.createWriteStream("./foo.pdf"));
          return res.status(200).json({ success: true, data: data });
        });
    } catch (error: any) {
      return res.status(200).json({ success: false, message: error.message });
    }
  }

  async getAllTransacation(req: Request, res: Response) {
    try {
      let request: any = req;
      let loggedInUser = request.user;
      if (loggedInUser.role !== "ADMIN") {
        throw new Error("UNAUTHORIZE");
      }

      // let payment = await Payment.aggregate([
      //   {
      //     $lookup: {
      //       from: "users",
      //       localField: "user",
      //       foreignField: "_id",
      //       as: "user",
      //     },
      //   },
      //   {
      //     $unwind: "$user",
      //   },
      //   {
      //     $lookup: {
      //       from: "subscriptions",
      //       localField: "subscription",
      //       foreignField: "_id",
      //       as: "subscription",
      //     },
      //   },
      //   {
      //     $unwind: { path: "$subscription" ,preserveNullAndEmptyArrays:true},
      //   },
      // ]);
      let payment = await Payment.find().populate("subscription");
      return res.status(200).json({
        success: true,
        message: "all transcation get successfully",
        data: payment,
      });
    } catch (err: any) {
      if (err.message === "UNAUTHORIZE") {
        res.status(401).json({ success: false, message: err.message });
      } else {
        res.status(500).json({ success: false, message: err.message });
      }
    }
  }

  async renewSubscriptionForOrganization(req: Request, res: Response) {
    try {
      let payload = {
        ...req.body,
      };
      let loggedInUser = req.body.user;
      delete payload.user;

      let coupon_payload = {
        coupon_code: payload.coupon_code,
        can_use_for: payload.quantity,
        organization: loggedInUser._id,
        subscription: payload.subscription,
        type: "ORGANIZATION",
        expires_at: payload.coupon_expiry_date,
      };

      let user_subscription_payload = {
        subscription: payload.subscription,
        organization: loggedInUser._id,
        coupon_code: payload.coupon_code,
        quantity: payload.quantity,
        subscription_created_date: moment().toISOString(),
        subscription_end_date: payload.coupon_expiry_date,
      };

      let user_subscription = new UserSubscription(user_subscription_payload);
      await user_subscription.save();

      let coupon = new Coupon(coupon_payload);
      await coupon.save();

      let payment_payload = {
        transactionId: payload.id,
        subscription: payload.subscription._id,
        user_subscription: user_subscription._id,
        plan: payload.plan._id,
        amount: payload.total_amount,
        paymentFor: "Renew Organization Subscription ",
        status: "SUCCESS",
        mode: "ONLINE",
        organization: loggedInUser._id,
        payment_date: moment().toISOString(),
      };

      await Payment.findOneAndUpdate(
        { user: loggedInUser._id, transactionId: payload.transactionId },
        payment_payload,
        { upsert: true, new: true }
      );

      let mail_body = `<h3>COUPON CODE:  ${payload.coupon_code}`;
      await emailClient.Send(
        loggedInUser.email,
        "Organization Coupon",
        mail_body
      );

      return res
        .status(200)
        .json({ success: true, message: "Subscription renewed successfully" });
    } catch (error: any) {
      console.log(error);
      return res.status(200).json({ success: false, message: error.message });
    }
  }
}

export default PaymentController;
