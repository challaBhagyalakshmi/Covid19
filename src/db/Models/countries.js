const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const uuid = require("uuid/v4");
const Sequelize = require("sequelize");
const sequelize = connection.sequelize;
const country = sequelize.define("countries", {
  country_name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: true
  },
  country_code: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    uniqueKey: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  }
});

country.sync();

module.exports = { Country };
