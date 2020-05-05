const Sequelize = require("sequelize");
const uuid = require("uuid/v4");
const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const Country = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/countries.js");
const country = Country.country;
const sequelize = connection.sequelize;
const Confirm = sequelize.define("confirm_cases", {
  "4/28/20": {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
    uniquekey: false,
  },
  country_name: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: false,
    defaultValue: false,
    uniquekey: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
    uniquekey: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
    uniquekey: false,
  },
});
country.hasMany(Confirm, {
  foreignKey: "country_code",
  foreignKeyConstraint: true,
});
Confirm.belongsTo(country, { foreignKey: "country_code" });
Confirm.sync();

module.exports = { Confirm };
