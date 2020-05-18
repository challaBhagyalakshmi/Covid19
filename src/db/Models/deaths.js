const Sequelize = require("sequelize");
const connection = require("../config/connection.js");
const Country = require("./countries.js");

const country = Country.country;
const sequelize = connection.sequelize;

const Death = sequelize.define("deaths", {
  no_of_cases_till_yesterday: {
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: false,
    defaultValue: null,
    unique:false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
    unique:false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null,
    unique:false,
  },
});
country.hasMany(Death, {
  foreignKey: "country_code",
  foreignKeyConstraint: true,
});
Death.belongsTo(country, {
  foreignKey: "country_code",
});
Death.sync();

module.exports = { Death };
