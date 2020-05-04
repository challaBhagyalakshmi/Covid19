const csv = require("csv-parser");
const Sequelize = require("sequelize");
const fs = require("fs");
const confirm = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/confirm.js");
const country = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/countries.js");
const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const Country = country.country;
const Confirm = confirm.Confirm;
const sequelize = connection.sequelize;
fs.createReadStream(
  "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/confirmed.csv"
)
  .pipe(csv())
  .on("data", (row) => {
    const data = row.Country;
    sequelize.sync().then(function () {
      return Country.findAll({
        where: {
          country_name: data,
        },
        attributes: ["id"],
      }).then((id) => {
        const id_val = id.id;
        sequelize.sync().then(function () {
          Confirm.update(
            {
              country_code: id_val,
            },
            {
              where: {
                country_name: data,
              },
            }
          );
        });
      });
    });
  })
  .on("end", () => {
    console.log("successfully csv is processed");
  });
