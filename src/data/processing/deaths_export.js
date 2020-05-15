const csv = require("csv-parser");
const fs = require("fs");
const death = require("../../db/Models/deaths.js");
const deaths = death.Death;

async function deaths_data_import_db() {
  deaths.destroy({ where: {}, truncate: true });
  fs.createReadStream("../csv_files/deaths.csv")
    .pipe(csv())
    .on("data", (row) => {
      const data = row["4/28/20"];
      const coun_name = row.Country;
      deaths
        .sync()
        .then(function () {
          return deaths.create({
            no_of_cases_till_yesterday: data,
            country_name: coun_name,
          });
        })
        .then((data) => {
          console.log(JSON.stringify(data));
        });
    })
    .on("end", () => {
      console.log("csv file successfully processed");
    });
}

deaths_data_import_db();
module.exports = { deaths_data_import_db };
