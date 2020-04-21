const csv = require("csv-parser");
const fs = require("fs");
const confirm = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/confirm.js");
const Confirm = confirm.Confirm;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/confirmed_cases_in_global.csv"
)
  .pipe(csv())
  .on("data", row => {
    country = row.country;
    total_cases = row.total_cases;
    Confirm.sync()
      .then(() => {
        return Confirm.create({
          country_code: country,
          No_of_cases: total_case
        });
      })
      .then(data => {
        console.log(data);
      });
  })
  .on("end", () => console.log("csv file successfully processed"));
