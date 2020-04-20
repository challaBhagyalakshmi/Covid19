const csv = require("csv-parser");
const fs = require("fs");
//const sequelize = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const countries = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/countries.js");
const Country = countries.country;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/countries.csv"
)
  .pipe(csv())
  .on("data", row => {
    data = Object.values(row);
    Country.sync()
      .then(function() {
        return Country.create({
          country_name: data[0]
        });
      })
      .then(data => {
        console.log(data);
      });
    //console.log(data[0]);
  })
  .on("end", () => {
    console.log("csv file successfully processed");
  });
