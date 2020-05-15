const csv = require("csv-parser");
const fs = require("fs");
const recovered = require("../../db/Models/recovered.js");
const Recover = recovered.Recover;

async function recovered_data_import_db() {
  Recover.destroy({ where: {}, truncate: true });
  fs.createReadStream("../csv_files/recovered.csv")
    .pipe(csv())
    .on("data", (row) => {
      const data = row["4/28/20"];
      const coun_name = row.Country;
      Recover.sync()
        .then(function () {
          return Recover.create({
            no_of_cases_till_yesterday: data,
            country_name: coun_name,
          });
        })
        .then((dat) => {
          console.log(JSON.stringify(dat));
        });
    })
    .on("end", () => console.log("csv file successfully processed"));
}

recovered_data_import_db();
module.exports = { recovered_data_import_db };

