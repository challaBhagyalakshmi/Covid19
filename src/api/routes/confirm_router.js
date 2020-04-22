const express = require("express");
const Sequelize = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const router = express.Router();
const sequelize = Sequelize.sequelize;

router.get("/top10", (req, res) => {
  sequelize
    .query(
      "select country_name,no_of_cases from countries c,confirm_cases d where c.country_code=d.country_code order by no_of_cases asc limit 10"
    )
    .then(data => {
      res.send(JSON.stringify(data));
      res.status(200);
    });
});

module.exports = { router };
