const request = require("supertest");
const app = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/Middlewares/app.js");

describe("Top 10 countries who is having highest active cases in world", () => {
  it("it should return top 10 countries ", () => {
    const response = request(app).get("/confirmed/top10");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe([
      {
        country_name: "US",
        no_of_cases: 1069534
      },
      {
        country_name: "Spain",
        no_of_cases: 213435
      },
      {
        country_name: "Italy",
        no_of_cases: 205463
      },
      {
        country_name: "United Kingdom",
        no_of_cases: 172481
      },
      {
        country_name: "France",
        no_of_cases: 167299
      },
      {
        country_name: "Germany",
        no_of_cases: 163009
      },
      {
        country_name: "Turkey",
        no_of_cases: 120204
      },
      {
        country_name: "Russia",
        no_of_cases: 106498
      },
      {
        country_name: "Iran",
        no_of_cases: 94640
      },
      {
        country_name: "Brazil",
        no_of_cases: 85380
      }
    ]);
  });
});
