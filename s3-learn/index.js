require("dotenv").config();
const getObjectURL = require("./get");
const listObjects = require("./listObjects");
const putObject = require("./put");

async function init() {
  // console.log(`URL for ${key} : ,${await getObjectURL(key)}`);
  // console.log(
  //   "URL for uploading : ",
  //   await putObject(`image-${Date.now()}.jpeg`, "image/jpeg")
  // );
  await listObjects()
}

init();
