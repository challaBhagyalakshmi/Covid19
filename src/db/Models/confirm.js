const Sequelize = require("sequelize");
const connection = require("../config/connection.js");
const Country = require("./countries.js");

const country = Country.country;
const sequelize = connection.sequelize;

const Confirm = sequelize.define("confirm_cases", {
  no_of_cases_till_yesterday: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
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
