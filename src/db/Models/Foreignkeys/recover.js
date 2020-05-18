const csv = require("csv-parser");
const Sequelize = require("sequelize");
const fs = require("fs");
const recover = require("../../../db/Models/recovered.js");
const country = require("../../../db/Models/countries.js");
const connection = require("../../../db/config/connection.js");

const Country = country.country;
const Recover = recover.Recover;
const sequelize = connection.sequelize;

async function id_init() {
  const id_val = await sequelize
    .query("select * from confirm_cases order by id asc limit 1")
    .then((data) => {
      return data[0][0].id;
    });
  return id_val;
}

async function foreign_key_recover() {
  let id_val = await id_init();
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
                  id: id_val,
                },
              }
            );
          });
          id_val++;
        });
    })
    .on("end", () => {
      console.log("successfully csv is processed");
    });
}

module.exports = { foreign_key_recover };
