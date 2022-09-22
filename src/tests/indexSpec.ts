import app from "..";
import request from "supertest";

describe("endpoint GET / test", async (): Promise<void> => {
  it("return status of 200: ", async (): Promise<void> => {
    const response = await request(app)
      .get("/")
      .query({ fileName: "fjord", width: 100, height: 100 });
    expect(response.status).toEqual(200);
  });
});
