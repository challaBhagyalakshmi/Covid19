const csv = require("csv-parser");
const fs = require("fs");
const foreign_key = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/Foreignkeys/confirm.js");
const confirm = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/confirm.js");
const Confirm = confirm.Confirm;

Confirm.destroy({});
async function confirm_data_import_db() {
  fs.createReadStream(
    "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/confirmes.csv"
  )
    .pipe(csv())
    .on("data", (row) => {
      const data = row["4/28/20"];
      const coun_name = row.Country;
      Confirm.sync()
        .then(function () {
          return Confirm.create({
            "4/28/20": data,
            country_name: coun_name,
          });
        })
        .then((dat) => {
          console.log(JSON.stringify(dat));
        });
      console.log(row);
      foreign_key.foreign_confirm();
    })
    .on("end", () => {
      console.log("csv file successfully processed");
    });
}

module.exports = { confirm_data_import_db };
