const csv = require("csv-parser");
const Sequelize = require("sequelize");
const fs = require("fs");
const confirm = require("../confirm.js");
const country = require("../countries.js");
const connection = require("../../config/connection.js");

const Country = country.country;
const Confirm = confirm.Confirm;
const sequelize = connection.sequelize;

async function foreign_confirm() {
  fs.createReadStream("../../../data/csv_files/confirmes.csv")
    .pipe(csv())
    .on("data", async (row) => {
      const country = await row.Country;
      sequelize
        .sync()
        .then(function () {
          return Country.findAll({
            where: {
              country_name: country,
            },
          });
        })
        .then(async (data) => {
          const val = await data[0].id;
          sequelize.sync().then(async function () {
            await Confirm.update(
              {
                country_code: val,
              },
              {
                where: {
                  country_name: country,
                },
              }
            );
          });
        });
    })
    .on("end", () => {
      console.log("successfully csv is processed");
    });
}

module.exports = { foreign_confirm };
