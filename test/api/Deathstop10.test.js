const request = require("supertest");
const app = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/Middlewares/app.js");

describe("Top 10 countries who is having highest deaths in world", () => {
  it("it should return top 10 countries ", () => {
    const response = request(app).get("/deaths/top10");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe([
      {
        country_name: "Italy",
        no_of_cases: 27967
      },
      {
        country_name: "United Kingdom",
        no_of_cases: 26771
      },
      {
        country_name: "Spain",
        no_of_cases: 24543
      },
      {
        country_name: "US",
        no_of_cases: 18069
      },
      {
        country_name: "Belgium",
        no_of_cases: 7594
      },
      {
        country_name: "6623",
        no_of_cases: Germany
      },
      {
        country_name: "Iran",
        no_of_cases: 6028
      },
      {
        country_name: "Brazil",
        no_of_cases: 5901
      },
      {
        country_name: "Netherlands",
        no_of_cases: 4795
      },
      {
        country_name: "China",
        no_of_cases: 4512
      }
    ]);
  });
});
