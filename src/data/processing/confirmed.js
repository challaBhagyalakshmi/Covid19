const csv = require("csv-parser");
const fs = require("fs");
const confirm = require("../../db/Models/confirm.js");
const Confirm = confirm.Confirm;

async function confirm_data_import_db() {
  Confirm.destroy({ where: {}, truncate: true });
  fs.createReadStream("../csv_files/confirmes.csv")
    .pipe(csv())
    .on("data", (row) => {
      const data = row["4/28/20"];
      const coun_name = row.Country;
      Confirm.sync()
        .then(function () {
          return Confirm.create({
            no_of_cases_till_yesterday: data,
            country_name: coun_name,
          });
        })
        .then((dat) => {
          console.log(JSON.stringify(dat));
        });
    })
    .on("end", () => {
      console.log("csv file successfully processed");
    });
}

confirm_data_import_db();
module.exports = { confirm_data_import_db };

 
