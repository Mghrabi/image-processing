import Express, {NextFunction, Response, Request} from "express";
import path from "path";
import fs from "fs";

export const validateParamsFunc = (
  req: Request,
  res: Express.Response,
  next: NextFunction 
) : Response | void => {
  const { fileName, width, height } = req.query;
  //checking their existance
  if (!fileName || !width || !height) {
    return res
      .status(400)
      .send(
        "Error: Make sure to provide three parameters fileName, width and height"
      );
  }

  //validate fileName
  else if (!validateFileName(fileName as string)) {
    return res.status(400).send("Error: Enter a valid fileName");
  }

  //validate width and height are numbers
  else if (!parseInt(width as string) || !parseInt(height as string)) {
    return res
      .status(400)
      .send("Error: Enter numbers in width and height parameters");
  }
  return next();
};

const validateFileName = (fileName: string): boolean => {
  //check if filename exists in original folder
  const fileNamePath = path.join(
    __dirname,
    "../../assets/original",
    fileName + ".jpg"
  );
  // console.log("filename in validateFileName", fileName);
  // console.log('path to file name', fileNamePath)
  if (fs.existsSync(fileNamePath)) {
    // console.log("File name exists");
    return true;
  }
  //   console.log("file name doesn't exist");
  return false;
};
