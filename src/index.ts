import Express, { Response, Request} from "express";
import path from "path";
import { checkOrCreateImageFile } from "./utilities/imageUtility";
import { validateParamsFunc } from "./utilities/validationUtility";

const app = Express();

app.get(
  "/",
  validateParamsFunc,
  checkOrCreateImageFile,
  (req: Request, res: Response): void => {
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
