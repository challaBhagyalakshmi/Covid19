const request = require("supertest");
const app = require("../../src/api/Middlewares/app.js");

let token;
test("it should return top 10 countries who is having more confirmed cases", () => {
  request(app)
    .get("/confirmed/top10")
    .set("Authorization", "Bearer ${token}")
    .expect((res) => {
      expect(res.body).toBe([
        {
          country_name: "US",
          no_of_cases: 1069534,
        },
        {
          country_name: "Spain",
          no_of_cases: 213435,
        },
        {
          country_name: "Italy",
          no_of_cases: 205463,
        },
        {
          country_name: "United Kingdom",
          no_of_cases: 172481,
        },
        {
          country_name: "France",
          no_of_cases: 167299,
        },
        {
          country_name: "Germany",
          no_of_cases: 163009,
        },
        {
          country_name: "Turkey",
          no_of_cases: 120204,
        },
        {
          country_name: "Russia",
          no_of_cases: 106498,
        },
        {
          country_name: "Iran",
          no_of_cases: 94640,
        },
        {
          country_name: "Brazil",
          no_of_cases: 85380,
        },
      ]);
      expect(res.status).toBe(200);
    });
});
