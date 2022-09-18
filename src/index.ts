import Express from "express";
import path from "path";
import sharp from "sharp";
import { checkOrCreateImageFile } from "./utilities/image.utility";
import { validateParamsFunc } from "./utilities/validation.utility";

// app.set("view engine", "pug");
// console.log(path.join(__dirname)),
sharp(path.join(__dirname, "../assets/original/ahmed.jpg"))
  .resize(200, 100)
  .toFile(
    path.join(__dirname, "../assets/thumb/ahmed100100.jpg"),
    (err, info) => {
      console.log(err);
    }
  );

const app = Express();
app.get(
  "/",
  validateParamsFunc,
  checkOrCreateImageFile,
  (req: Express.Request, res: Express.Response, next: any) => {
    const { fileName, width, height } = req.query;

    const thumbPath = path.join(
      __dirname,
      "../assets/thumb/",
      (fileName as string) +
        parseInt(width as string) +
        parseInt(height as string) +
        ".jpg"
    );
    // next();

    
    // res.send('success');
    console.log("done");
    return res.sendFile(thumbPath);
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is on port ", PORT);
});
