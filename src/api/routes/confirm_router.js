const express = require("express");
const Sequelize = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const router = express.Router();
const sequelize = Sequelize.sequelize;

router.get("/top10", (req, res) => {
  try {
    sequelize
      .query(
        "select country_name,4/28/20 as no_of_cases from countries c,confirm_cases d where c.id=d.country_code order by 4/28/20 desc limit 10"
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
