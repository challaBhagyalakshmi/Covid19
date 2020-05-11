const csv = require("csv-parser");
const fs = require("fs");
const foreign_key = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/Foreignkeys/deaths.js");
const death = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/deaths.js");
const deaths = death.Death;

deaths.destroy({});
async function deaths_data_import_db() {
  fs.createReadStream(
    "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/deaths.csv"
  )
    .pipe(csv())
    .on("data", (row) => {
      const data = row["4/28/20"];
      const coun_name = row.Country;
      deaths
        .sync()
        .then(function () {
          return deaths.create({
            "4/28/20": data,
            country_name: coun_name,
          });
        })
        .then((data) => {
          console.log(JSON.stringify(data));
        });
      foreign_key.foreign_deaths();
    })
    .on("end", () => {
      console.log("csv file successfully processed");
    });
}

module.exports = { deaths_data_import_db };
