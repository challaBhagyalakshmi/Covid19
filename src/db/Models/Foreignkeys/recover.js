const csv = require("csv-parser");
const Sequelize = require("sequelize");
const fs = require("fs");
const recover = require("../recovered.js");
const country = require("../countries.js");
const connection = require("../../config/connection.js");

const Country = country.country;
const Recover = recover.Recover;
const sequelize = connection.sequelize;

async function foreign_key_recover() {
  fs.createReadStream("../../../data/csv_files/recovered.csv")
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
            await Recover.update(
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

module.exports = { foreign_key_recover };
