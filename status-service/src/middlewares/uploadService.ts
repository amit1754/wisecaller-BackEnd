import { Request, Response } from "express";
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const bucket = "wisecaller-images";
const MAX_FILE_SIZE = 10 * 1024 * 1024;

aws.config.update({
    secretAccessKey: process.env.secretAccessKey,
    accessKeyId: process.env.accessKeyId,
    region: process.env.AWS_REGION,
});

const MIME_TYPES_ALLOWED = [
    "image/jpeg",
    "image/png"
];

const FILE_EXTENSION_MAPPING: any = {
    "image/jpeg": { extension: ".jpeg" },
    "image/png": { extension: ".png" },
};

const s3 = new aws.S3({ signatureVersion: "v4" });

const fileFilter = (req: Request, file: any, cb: any) => {
    if (MIME_TYPES_ALLOWED.includes(file.mimetype)) {
        cb(null, true);
    } else {
        console.log("invalid mine type")
        cb(new Error("Invalid Mime Type, only JPEG/PNG allowed"), false);
    }
};

const upload = multer({
    fileFilter,
    limits: { fileSize: MAX_FILE_SIZE },
    storage: multerS3({
        s3,
        bucket,
        acl: "public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req: Request, file: any, cb: (arg0: null, arg1: { fieldName: any; }) => void) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req: Request, file: any, cb: (arg0: null, arg1: string) => void) {
            cb(null, Date.now().toString() + FILE_EXTENSION_MAPPING[file.mimetype].extension);

        },
    }),
});

export const deletefile = async (filename: string) => {
    const s3 = new aws.S3({
        secretAccessKey: "moq7cgspYRxpw656cAMz1F6FBD/G9Grh7wN5F9CJ",
        accessKeyId: "AKIATBDK2RTMG3EWA6W6",
        region: process.env.AWS_REGION,
    });
    s3.deleteObject({ Bucket: 'wisecaller-images', Key: filename }, (err:any, data:any) => {
        console.error(err);
        console.log(data);
    });
}

export default upload;