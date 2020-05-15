const express = require("express");
const Sequelize = require("../../db/config/connection.js");
const router = express.Router();
const Auth = require("../Middlewares/auth");
const auth = Auth.auth;
const sequelize = Sequelize.sequelize;

router.get("/top10", auth, async (req, res) => {
  try {
    sequelize
      .query(
        "select c.country_name,d.no_of_cases_till_yesterday from countries c,deaths d where c.id=d.country_code order by no_of_cases_till_yesterday desc limit 10"
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
