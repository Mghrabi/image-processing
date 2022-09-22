import path from "path";
import { createImageFile } from "../../utilities/imageUtility";

describe("image processing test", (): void => {
  it("createImageFile func should return true", async (): Promise<void> => {
    const fileName = "fjord";
    const width = "120";
    const height = "120";
    const thumbPath = path.join(
      __dirname,
      "../../../src/tests/assetsSpec/thumb",
      (fileName as string) +
        parseInt(width as string) +
        parseInt(height as string) +
        ".jpg"
    );

    // console.log('thumbPath before', thumbPath)
    const created = await createImageFile(thumbPath, fileName, width, height);
    expect(created).toEqual(true);
  });
});
