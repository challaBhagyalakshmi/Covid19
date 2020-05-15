const fs = require("fs");
const csv = require("csv-parser");
const deaths = require("../../src/db/Models/testdb/deaths.js");
const connection = require("../../src/db/config/testdbconn.js");

const sequelize = connection.sequelize;
const Deaths = deaths.Deaths;

describe("Deaths model ", async () => {
  beforeEach(async function () {
    await Deaths.destroy({ where: {}, truncate: true });
  });

  test("inserting the new record", async () => {
    fs.createReadStream("../../src/data/csv_files/deaths.csv")
      .on("data", async (row) => {
        const value = await row["4/28/20"];
        sequelize
          .sync()
          .then(function () {
            Deaths.create({
              no_of_cases_till_yesterday: row["4/28/20"],
            });
          })
          .then((data) => {
            expect(data["4/28/20"]).toBe(value);
          });
      })
      .on("end", () => {});
  });
});
