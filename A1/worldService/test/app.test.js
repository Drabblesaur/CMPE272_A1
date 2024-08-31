const request = require("supertest");
const app = require("../app");

describe("World Microservice test", () => {
  test("/world route should return World text", async () => {
    const res = await request(app).get("/world");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("World");
  });
});
