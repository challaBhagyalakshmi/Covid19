const fs = require("fs");
const csv = require("csv-parser");
const country = require("../../src/db/Models/testdb/countries.js");
const connection = require("../../src/db/config/testdbconn.js");

const sequelize = connection.sequelize;
const Country = country.country;

describe("Testing for countries model", async () => {
  beforeEach(async function () {
    await Country.destroy({ where: {}, truncate: true });
  });

  test("insert a new records ", async () => {
    fs.createReadStream("../../src/data/csv_files/countries.csv")
      .pipe(csv())
      .on("data", async (row) => {
        const data = Object.values(row);
        const dat = data[0];
        sequelize
          .sync()
          .then(function () {
            return Country.create({
              country_name: dat,
            });
          })
          .then((data) => {
            expect(data.country_name).toBe(dat);
          });
      })
      .on("end", () => {});
  });
});
