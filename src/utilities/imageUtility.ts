import  { NextFunction , Request, Response} from "express";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export const checkOrCreateImageFile = async (
  req: Request,
  res: Response,
  next: NextFunction 
): Promise<Response | void> => {
  const { fileName, width, height } = req.query;
  const thumbPath = path.join(
    __dirname,
    "../../assets/thumb",
    (fileName as string) +
      parseInt(width as string) +
      parseInt(height as string) +
      ".jpg"
  );
  // console.log("thumbPath", thumbPath);

  //check if file exists
  if (fs.existsSync(thumbPath)) {
    return next();
  }

  //check if thumb (folder) exist
  const thumbFolder =  path.join(
    __dirname,
    "../../assets/thumb"
  );

  // console.log('folder', thumbFolder)
  if(!fs.existsSync(thumbFolder))
  {
    fs.mkdirSync(thumbFolder)
  }

  //create new file version
  const created = await createImageFile(
    thumbPath,
    fileName as string,
    width as string,
    height as string
  );
  if (created) {
    return next();
  }
  return res.status(500).send("Error while processing the iamge");
};

export const createImageFile = async (
  thumbPath: string,
  fileName: string,
  width: string,
  height: string
): Promise<boolean> => {
  try {
    // console.log('thumbPath', thumbPath)
    fs.appendFileSync(thumbPath, "");
    await sharp(
      path.join(__dirname, "../../assets/original", fileName + ".jpg")
    )
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(thumbPath);
    return true;
  } catch (err) {
    // console.log("err while image processing");
    return false;
  }
};
