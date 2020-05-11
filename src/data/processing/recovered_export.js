const csv = require("csv-parser");
const fs = require("fs");
const foreign_key = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/Foreignkeys/recover.js");
const recovered = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/recovered.js");
const Recover = recovered.Recover;

async function recovered_data_import_db() {
  fs.createReadStream(
    "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/recovered.csv"
  )
    .pipe(csv())
    .on("data", (row) => {
      const data = row["4/28/20"];
      const coun_name = row.Country;
      Recover.sync()
        .then(function () {
          return Recover.create({
            "4/28/20": data,
            country_name: coun_name,
          });
        })
        .then((dat) => {
          console.log(JSON.stringify(dat));
        });
      foreign_key.foreign_key_recover();
    })
    .on("end", () => console.log("csv file successfully processed"));
}

module.exports = { recovered_data_import_db };
