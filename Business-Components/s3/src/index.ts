import { Request, Response, NextFunction } from "express";
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const MAX_FILE_SIZE = 3 * 1024 * 1024;

aws.config.update({
  secretAccessKey: process.env.secretAccessKey,
  accessKeyId: process.env.accessKeyId,
  region: process.env.AWS_REGION,
});

const MIME_TYPES_ALLOWED = ["image/jpeg", "image/png"];

const FILE_EXTENSION_MAPPING: any = {
  "image/jpeg": { extension: ".jpeg" },
  "image/png": { extension: ".png" },
};

const s3 = new aws.S3({ signatureVersion: "v4" });

const fileFilter = (req: Request, file: any, cb: any) => {
  if (MIME_TYPES_ALLOWED.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid Mime Type, only JPEG/PNG allowed"), false);
  }
};

const getS3Key = function(fileType: string) {
  if (fileType == "PROFILE") {
    return 'profile_images/';
  } else if (fileType == "STATUS_LOGO") {
    return 'status_images/';
  } else {
    return 'invoice/';
  }
}


const getS3BucketName = function() {
  return process.env.AWS_S3_BUCKET;    
}
const fileUpload = function upload(type:any):any{
  const bucketName = getS3BucketName();
  const folder = getS3Key(type);
  return multer({
    fileFilter,
    limits: { fileSize: MAX_FILE_SIZE },
    storage: multerS3({
      s3,
      bucket:bucketName,
      acl: "public-read",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function (
        req: Request,
        file: any,
        cb: (arg0: null, arg1: { fieldName: any }) => void
      ) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (
        req: Request,
        file: any,
        cb: (arg0: null, arg1: string) => void
      ) {
        cb(
          null,
          folder +
            Date.now().toString() +
            FILE_EXTENSION_MAPPING[file.mimetype].extension
        );
      },
    }),
  });
}

export const deletefile = async (filename: string) => {
  const s3 = new aws.S3({
    secretAccessKey: process.env.secretAccessKey,
    accessKeyId: process.env.accessKeyId,
    region: process.env.region,
  });
  s3.deleteObject(
    { Bucket: getS3BucketName(), Key: filename },
    (err: any, data: any) => {
      console.error(err);
    }
  );
};

const filesizeChecker = (req: Request, res: Response, next: NextFunction) => {
  try {
    let requestData: any = req;
    
    var reqBodyBefore = req.body;
    const fileSize = parseInt(requestData.headers["content-length"]);
    if (fileSize > MAX_FILE_SIZE) {
      throw new Error("file is less than 3 mb");
    } else {
      next();
      req.body = reqBodyBefore;
    }
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export default { fileUpload, filesizeChecker };
