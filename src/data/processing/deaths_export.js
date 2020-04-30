const csv = require("csv-parser");
const fs = require("fs");
const death = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/deaths.js");
const deaths = death.Death;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/confirmed.csv"
)
  .pipe(csv())
  .on("data", row => {
    const data = row["4/28/20"];
    deaths
      .sync()
      .then(function() {
        return deaths.create({
          "4/28/20": data
        });
      })
      .then(data => {
        console.log(JSON.stringify(data));
      });
  })
  .on("end", () => {
    console.log("csv file successfully processed");
  });
