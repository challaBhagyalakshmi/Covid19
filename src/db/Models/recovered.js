const Sequelize = require("sequelize");
const connection = require("../config/connection.js");
const Country = require("./countries.js");

const country = Country.country;
const sequelize = connection.sequelize;

const Recover = sequelize.define("recovered_cases", {
  no_of_cases_till_yesterday: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
  },
});
country.hasMany(Recover, {
  foreignKey: "country_code",
  foreignKeyConstraint: true,
});
Recover.belongsTo(country, {
  foreignKey: "country_code",
});
Recover.sync();

module.exports = { Recover };
