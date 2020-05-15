const request = require("supertest");
const app = require("../../src/api/Middlewares/app.js");

describe("Top 10 countries who is having highest recovered cases in world", () => {
  test("it should return top 10 countries ", () => {
    const response = request(app)
      .get("/recovered/top10")
      .expect((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toBe([
          {
            country_name: "Spain",
            no_of_cases: 123903,
          },
          {
            country_name: "Germany",
            no_of_cases: 117400,
          },
          {
            country_name: "US",
            no_of_cases: 115936,
          },
          {
            country_name: "China",
            no_of_cases: 77610,
          },
          {
            country_name: "Iran",
            no_of_cases: 75103,
          },
          {
            country_name: "Italy",
            no_of_cases: 71252,
          },
          {
            country_name: "France",
            no_of_cases: 49476,
          },
          {
            country_name: "Turkey",
            no_of_cases: 44040,
          },
          {
            country_name: "United kingdon",
            no_of_cases: 34897,
          },
          {
            country_name: "Brazil",
            no_of_cases: 32544,
          },
        ]);
      });
  });
});
