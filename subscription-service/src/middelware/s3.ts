const AWS = require("aws-sdk");
const fs = require("fs");

const AWSCredentials = {
  accessKey: process.env.accessKeyId,
  secret: process.env.secretAccessKey,
  bucketName: process.env.AWS_S3_BUCKET,
};

const s3 = new AWS.S3({
  accessKeyId: AWSCredentials.accessKey,
  secretAccessKey: AWSCredentials.secret,
});

const uploadToS3 = async (file: any, filename: any) => {
  // Read content from the file
  const fileContent = fs.readFileSync(file);
  let {data} =  await s3.putObject({
    Bucket: "wisecaller-images",
    Key: `invoice/${filename}`,
    Body: fileContent,
  })

  console.log(data)

  // Uploading files to the bucket
  // await s3.putObject(
  //   {
  //     Bucket: "wisecaller-images",
  //     Key: `invoice/${filename}`,
  //     Body: fileContent,
  //   },
  //   function (err: any, data: any) {
  //     if (err) {
  //       throw err;
  //     } else {
  //       let url = `${process.env.IMAGE_PATH}invoice/${filename}`;
  //       console.log("url :>> ", url);
  //       return url;
  //     }
  //   }
  // );
};

export default uploadToS3;
