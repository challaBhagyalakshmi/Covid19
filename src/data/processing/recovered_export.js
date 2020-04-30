const csv = require("csv-parser");
const fs = require("fs");
const recovered = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/recovered.js");
const Recover = recovered.Recover;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/recovered.csv"
)
  .pipe(csv())
  .on("data", row => {
    const data = row["4/28/20"];
    Recover.sync()
      .then(function() {
        return Recover.create({
          "4/28/20": data
        });
      })
      .then(dat => {
        console.log(JSON.stringify(dat));
      });
  })
  .on("end", () => console.log("csv file successfully processed"));
///Users/bhagyalakshmi/Documents/COVID_19/src/data/processing/recovered_export.js
