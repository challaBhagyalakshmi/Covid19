const csv = require("csv-parser");
const fs = require("fs");
const death = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/deaths.js");
const map = require("/Users/bhagyalakshmi/Documents/COVID_19/src/data/processing/mapping.js");
const Death = death.Death;
const mapp = map.Data;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/deaths_global.csv"
)
  .pipe(csv())
  .on("data", row => {
    country = row.country;
    result = mapp.country;
    total_cases = row.total_cases;
    Death.sync()
      .then(() => {
        return Death.create({
          country_code: result,
          No_of_cases: total_case
        });
      })
      .then(data => {
        console.log(data);
      });
  })
  .on("end", () => console.log("csv file successfully processed"));
