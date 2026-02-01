const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const s3Client = require("./client");

const DeleteObject = async (key) => {
  const command = new DeleteObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: key, // Use the key passed into the function
  });

  try {
    const response = await s3Client.send(command);
    console.log(`Successfully deleted: ${key}`);
    return response;
  } catch (err) {
    console.error("Failed to delete image:", err);
    throw err;
  }
};

module.exports = DeleteObject;