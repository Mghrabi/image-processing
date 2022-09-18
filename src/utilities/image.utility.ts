import Express from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export const checkOrCreateImageFile =  (
  req: Express.Request,
  res: Express.Response,
  next: Function
) => {
  const { fileName, width, height } = req.query;
  const thumbPath = path.join(
    __dirname,
    "../../assets/thumb",
    (fileName as string) +
      parseInt(width as string) +
      parseInt(height as string) +
      ".jpg"
  );
  console.log("thumbPath", thumbPath);


  //check if file exists
  if (fs.existsSync(thumbPath)) {
    return next();
  }


  //create new file version
  try {
    fs.appendFileSync(thumbPath, "");
    sharp(path.join(__dirname, '../../assets/original', fileName + ".jpg"))
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(thumbPath, (err) => {
        console.log("err in sharp", err);
        return res.send("Error while processing the iamge");
      });
    return next();

  } catch (err) {
    console.log("err while image processing");
    return res.send("Error while processing the iamge");
  }
};
