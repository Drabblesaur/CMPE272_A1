const request = require("supertest");
const app = require("../app");

describe("Hello Microservice test", () => {
  test("/hello route should return Hello text", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello");
  });
});
