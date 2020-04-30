const csv = require("csv-parser");
const fs = require("fs");
const confirm = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/confirm.js");
const Confirm = confirm.Confirm;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/confirmed.csv"
)
  .pipe(csv())
  .on("data", row => {
    const data = row["4/28/20"];
    Confirm.sync()
      .then(function() {
        return Confirm.create({
          "4/28/20": data
        });
      })
      .then(dat => {
        console.log(JSON.stringify(dat));
      });
  })
  .on("end", () => {
    console.log("csv file successfully processed");
  });
