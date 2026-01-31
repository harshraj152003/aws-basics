const { ListObjectsV2Command, S3Client } = require("@aws-sdk/client-s3");
const s3Client = require("./client");

const listObjects = async () => {
  const command = new ListObjectsV2Command({
    Bucket: process.env.BUCKET_NAME,
    Key: '/',
  });
  const result = await s3Client.send(command);
  console.log(result);
};

module.exports = listObjects;