import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import {  jwtVerify } from '../utils';

const authorization = async (req: Request, res: Response, next: NextFunction) => {
	try {
        const reqData:any = req.headers
		const { authorization } = reqData;
		if (!authorization) throw new Error("Token is not found");
		const token =
			authorization && authorization.startsWith('Bearer ')
				? authorization.slice(7, authorization.length)
				: authorization;
		const verifyToken:any = jwtVerify(token);

		if (!verifyToken) throw new Error("token is invalid");

		const currentDate = Math.floor(Date.now() / 1000);

		if (currentDate > verifyToken?.exp) {
			throw new Error("token is expired");
		}
		console.log("verifyToken",verifyToken)
		const data:any = await User.findOne({
			_id: verifyToken._id,
		});
		if (data) {
			req.user=data
			next()
		} else {
			throw new Error("unauthorized");
		}
	} catch (error:any) {
		
		return res
			.status(401)
			.send({ success: false, message: error.message });
	}
};

export default authorization;