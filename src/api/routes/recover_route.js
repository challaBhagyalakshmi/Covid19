const express = require("express");
const Sequelize = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const router = express.Router();
const sequelize = Sequelize.sequelize;

router.get("/top10", (req, res) => {
  try {
    sequelize
      .query(
        "select country_name,no_of_cases from recovered_cases r,countries c where c.id=r.country_code order by 4/28/20 desc limit 10"
      )
      .then((data) => {
        res.send(JSON.stringify(data));
        res.status(200);
      });
  } catch (error) {
    console.log(error);
  }
});

module.exports = { router };
