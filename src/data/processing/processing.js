const csv = require("csv-parser");
const fs = require("fs");
const countries = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/countries.js");
const Country = countries.country;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/countries.csv"
)
  .pipe(csv())
  .on("data", row => {
    const data = Object.values(row);
    const dat = data[0];
    Country.sync()
      .then(function() {
        return Country.create({
          country_name: dat
        });
      })
      .then(data => {
        console.log(data);
      });
  })
  .on("end", () => {
    console.log("csv file successfully processed");
  });
