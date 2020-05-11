const Sequelize = require("sequelize");
const config = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/config.js");
const credential = config.Credential;
const sequelize = new Sequelize(
  credential.testdb,
  credential.user,
  credential.pass,
  {
    host: credential.host,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

module.exports = { sequelize };
