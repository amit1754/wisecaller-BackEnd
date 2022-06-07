import AWS from "aws-sdk";
import moment from "moment";
import fs from "fs";

AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.AWSREGION,
});

let S3 = new AWS.S3({});

export const uploadBase64Image = async (image: string) => {
  let contentType = image.split(";")[0].split(":")[1];
  let imageBuffer = Buffer.from(image, "base64");
  let payload = {
    Key: `profile/${moment.now().toString()}`,
    Body: imageBuffer,
    ContentEncoding: "base64",
    ContentType: contentType,
    Bucket: String(process.env.AWS_S3_BUCKET),
  };

  const { Location, Key } = await S3.upload(payload).promise();
  return Location;
};

export const uploadImage = async (path: string, filename: string) => {
  let image = fs.readFileSync(path);
  let payload = {
    Key: `template/${moment.now().toString()}-${filename}`,
    Body: image,
    Bucket: String(process.env.AWS_S3_BUCKET),
  };

  const { Location, Key } = await S3.upload(payload).promise();
  return Location;
};
