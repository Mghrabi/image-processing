import Express from "express";
import path from "path";
import { checkOrCreateImageFile } from "./utilities/image.utility";
import { validateParamsFunc } from "./utilities/validation.utility";


const app = Express();
app.get(
  "/",
  validateParamsFunc,
  checkOrCreateImageFile,
  (req: Express.Request, res: Express.Response) => {

    const { fileName, width, height } = req.query;
    const thumbPath = path.join(
      __dirname,
      "../assets/thumb/",
      (fileName as string) +
        parseInt(width as string) +
        parseInt(height as string) +
        ".jpg"
    );
    // console.log("done");
    return res.status(200).sendFile(thumbPath);
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is on port ", PORT);
});

export default app;