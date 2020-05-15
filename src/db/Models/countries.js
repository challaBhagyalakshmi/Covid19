const connection = require("../config/connection.js");
const Sequelize = require("sequelize");
const sequelize = connection.sequelize;

const country = sequelize.define("countries", {
  country_name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false,
  },
});

country.sync();

module.exports = { country };
