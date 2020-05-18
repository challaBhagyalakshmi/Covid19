const fs = require("fs");
const csv = require("csv-parser");
const recover = require("../../src/db/Models/testdb/recovered.js");
const connection = require("../../src/db/config/testdbconn.js");

const sequelize = connection.sequelize;
const Recover = recover.Recover;

describe("Recovered model ", async () => {
  beforeEach(async function () {
    await Recover.destroy({ where: {}, truncate: true });
  });

  test("inserting the new record into the recovered model", async () => {
    fs.createReadStream("../../src/data/csv_files/deaths.csv")
      .on("data", async (row) => {
        const value = await row["4/28/20"];
        sequelize
          .sync()
          .then(function () {
            Recover.create({
              no_of_cases_till_yesterday: row["4/28/20"],
            });
          })
          .then((data) => {
            expect(data.no_of_cases_till_yesterday).toBe(value);
          });
      })
      .on("end", () => {});
  });
});
