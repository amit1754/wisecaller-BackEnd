import { Request, Response, NextFunction } from "express";
import { get } from "@wisecaller/http";

const SNS_TOPIC_ARN_HEADER: string = "x-amz-sns-topic-arn";
const SNS_MESSAGE_TYPE_HEADER: string = "x-amz-sns-message-type";
const CONTENT_TYPE_HEADER: string = "content-type";
const MESSAGE_TYPE_SUBSCRIPTION_CONFIRMATION: string = "SubscriptionConfirmation";
const MESSAGE_TYPE_NOTIFICATION: string = "Notification";

export const handleSNSNotificationHeader = async(req: Request, res: Response, next: NextFunction) => {
    console.log("Begin handleSNSNotificationHeader");
    const topicARN = req.headers[SNS_TOPIC_ARN_HEADER];
    const  messageType = req.headers[SNS_MESSAGE_TYPE_HEADER];
    if (topicARN && messageType)
    {
        // If SNS Message then the content type would be 'text/plain'
        // needs to be changed to 'application/json'
        if (req.headers[CONTENT_TYPE_HEADER])
        {
            if (req.headers[CONTENT_TYPE_HEADER].toString().toLowerCase() != "application/json")
            {
                console.log("Content-Type request header: " + req.headers[CONTENT_TYPE_HEADER]);
                req.headers[CONTENT_TYPE_HEADER] = "application/json";
            }
        }
        else
        {
            req.headers[CONTENT_TYPE_HEADER] = "application/json";
        }

        console.log("Modified Content-Type request header " + req.headers[CONTENT_TYPE_HEADER]);
    }

    console.log("END handleSNSNotificationHeader");
    next();
};

export const handleSNSNotification = async(req: Request, res: Response, next: NextFunction) => {
    console.log("Begin handleSNSNotification");
    try {
        let endRequest: boolean = false;
        const topicARN = req.headers[SNS_TOPIC_ARN_HEADER];
        if (topicARN)
        {
            console.log("Begin processing SNS notification");
            const  messageType = req.headers[SNS_MESSAGE_TYPE_HEADER];
            if (messageType == MESSAGE_TYPE_SUBSCRIPTION_CONFIRMATION)
            {
                const subscribeUrl = req.body.SubscribeURL;
                if (subscribeUrl) {
                    const response = await get(subscribeUrl);
                    if (!response || response.error || response.statusCode !== 200) {
                        endRequest = true;
                        res.status(500).json("Failed to reach Subscribe Url");
                    } else {
                        res.status(200).json({success:true});
                        endRequest = true;
                    }
                } else {                
                    endRequest = true;
                    res.status(400).json("Invalid Subscribe Url");
                }
            }
            else if (messageType == MESSAGE_TYPE_NOTIFICATION)
            {
                // No business operations as of now
            }
    
            console.log("End processing SNS notification");
        }
    
        if (endRequest) {
            console.log("End handleSNSNotification");
        } else {            
            console.log("End handleSNSNotification");
            next();
        }
    } catch(error) {
        console.log(error);
        console.log("End handleSNSNotification");
    }
};