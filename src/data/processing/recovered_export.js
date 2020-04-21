const csv = require("csv-parser");
const fs = require("fs");
const recovered = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/recovered.js");
const map = require("/Users/bhagyalakshmi/Documents/COVID_19/src/data/processing/mapping.js");
const mapp = map.Data;
const Recover = recovered.Recover;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/recovered_global.csv"
)
  .pipe(csv())
  .on("data", row => {
    country = row.country;
    result = mapp.country;
    total_cases = row.total_cases;
    Recover.sync()
      .then(() => {
        return Recover.create({
          country_code: country,
          No_of_cases: total_case
        });
      })
      .then(data => {
        console.log(data);
      });
  })
  .on("end", () => console.log("csv file successfully processed"));
