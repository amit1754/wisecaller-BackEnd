import { Request, Response } from "express";
import { Packages } from "../../models/packages";
import { PaymentModel } from "../../models/paymentModel";
import { User } from "../../models/user";
import { IPayment } from '../../interfaces/paymentInterface'
import { config } from "dotenv";
config({ path: ".env" });
import axios from 'axios'
class PaymentController {


  async add(req: Request, res: Response) {
    try {
      const { body, user }: any = req
      const pakageDetails = await Packages.findById(body.packageId)
      if (!pakageDetails) {
        throw new Error(`package not found`)
      }
      var config: any = {
        method: 'get',
        url: `https://api.razorpay.com/v1/payments/${body.paymentId}`,
        headers: {
          'Authorization': process.env.AUTH
        }
      };
      const paymentDetails: any = await axios(config)
      const paymentInstace = paymentDetails.data
      if (paymentInstace.status == 'failed') {
        throw new Error('payment is not successful')
      }
      if (pakageDetails.price != paymentInstace.amount / 100) {
        throw new Error('payment amount is not clear')

      }
      let amount = paymentInstace.amount / 100
      const paymentObje: IPayment = {
        paymentId: paymentInstace.id,
        status: paymentInstace.status === 'failed' ? 'FAILED' : 'SUCCESS',
        amount: amount.toString(),
        user: user._id,
        paymentObj: paymentInstace,
        packageId: pakageDetails._id

      }
      let payment: any = new PaymentModel(paymentObje);
      const paymentSave = await payment.save();
      if (paymentSave) {
        res.status(200).json({ success: true, message: "payment detilas updated" });
      }
      else {
        throw new Error('payment not updated')
      }


    } catch (error: any) {
      if (error.code === 11000) {
        res.status(400).json({ success: false, message: "Payment details already exists" });
      } else {
        res.status(500).json({ success: false, message: error.message });
      }
    }
  }
  async show(req: Request, res: Response) {
    try {
      const logginUser: any = req.user

      const { role } = logginUser
      console.log(`logginUser?.role`, logginUser.role, logginUser._id)
      if (logginUser?.role != 'ADMIN') {
        res.status(401).json({ success: false, message: "you cannot access this service" })
      }
      else {
        let { search, _id, limit, page }: any = req.query;
        let whereClause = {};
        if (search) {
          search = new RegExp(search, 'ig');
          whereClause = {
            $or: [{ paymentId: search }, { amount: search }, { user: search }, { packageId: search }],
          };
        }
        if (_id) {
          whereClause = { ...whereClause, _id };
        }


        const data = await PaymentModel
          .find(whereClause)
          .populate(['user', 'packageId'])

          .skip(page > 0 ? +limit * (+page - 1) : 0)
          .limit(+limit || 20);
        const totalCount = await PaymentModel.find(whereClause).countDocuments();

        res.status(200).json({ success: true, message: "paymentDetails get successfully", data, totalCount });
      }
    } catch (error: any) {
      console.log(`error`, error)
      res.status(500).json({ success: false, message: error.message });
    }
  }



}

const controller = new PaymentController();
export default PaymentController;
