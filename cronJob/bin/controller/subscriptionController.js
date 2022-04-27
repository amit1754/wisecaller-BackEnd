"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_subscription_1 = require("../models/user_subscription");
const sns_1 = __importDefault(require("@wisecaller/sns"));
const user_devices_1 = require("../models/user_devices");
const organization_1 = require("../models/organization");
const email_1 = __importDefault(require("@wisecaller/email"));
const moment_1 = __importDefault(require("moment"));
class SubscriptionController {
    NotifyUser(request, response) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let days = process.env.SUBSCRIPTIONDAY;
                let startDate = (0, moment_1.default)().minutes(0).seconds(0).milliseconds(0);
                let endDate = (0, moment_1.default)().add(5, "d").minutes(0).seconds(0).milliseconds(0);
                const allSubscription = yield user_subscription_1.UserSubscription.find({
                    subscription_end_date: {
                        $gt: startDate.toISOString(),
                        $lt: endDate.toISOString(),
                    },
                }).populate("user");
                let message = "your subscription end in 5 days";
                let emailContent = message;
                let subject = process.env.SUBSCRIPTIONSUBJECT;
                for (let i = 0; i < allSubscription.length; i++) {
                    if ((_a = allSubscription[i]) === null || _a === void 0 ? void 0 : _a.organization) {
                        let organazationDetails = yield organization_1.Organization.findById(new mongoose_1.Types.ObjectId((_b = allSubscription[i]) === null || _b === void 0 ? void 0 : _b.organization));
                        let messageDetails = {
                            subscription_created_date: allSubscription[i].subscription_created_date,
                            subscription_end_date: allSubscription[i].subscription_end_date,
                            organazationDetails: {
                                OrganizationName: organazationDetails.name,
                                OrganizationEmail: organazationDetails.email,
                                organazationWebsite: organazationDetails.website,
                                organazationphone_no: organazationDetails.phone_no
                            },
                        };
                        let userToken = yield user_devices_1.UserDevices.find({
                            user: allSubscription[i].user._id,
                            is_active: true,
                        });
                        if (userToken) {
                            let payload = {
                                notification: {
                                    title: "subscription end",
                                    sound: process.env.SOUND,
                                },
                            };
                            yield sns_1.default.sendPushNotification(userToken[0].arn, payload);
                        }
                        yield email_1.default.Send(allSubscription[i].email, subject, emailContent);
                    }
                }
                response
                    .status(200)
                    .json({ success: true, message: "success" });
            }
            catch (err) {
                console.log("err :>> ", err);
                response.status(500).json({ success: false, message: "failed" });
            }
        });
    }
}
exports.default = SubscriptionController;
