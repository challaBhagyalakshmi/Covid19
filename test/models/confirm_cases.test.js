const confirm = require("../../src/db/Models/testdb/confirm.js");
const connection = require("../../src/db/config/testdbconn.js");
const csv = require("csv-parser");
const fs = require("fs");

const sequelize = connection.sequelize;
const Confirm = confirm.Confirm;

describe("Confirmation model ", () => {
  beforeEach(async function () {
    await Confirm.destroy({ where: {}, truncate: true });
  });
  test("testing the  confirmation model ", () => {
    fs.createReadStream("../../src/data/csv_files/confirmed.csv")
      .on("data", async (row) => {
        const value = await row["4/28/20"];
        sequelize
          .sync()
          .then(function () {
            Confirm.create({
              no_of_cases_till_yesterday: value,
            });
          })
          .then((data) => {
            expect(data.no_of_cases_till_yesterday).toBe(value);
          });
      })
      .on("end", () => {});
  });
  afterEach(function () {
    Confirm.destroy({ where: {}, truncate: true });
  });
});
