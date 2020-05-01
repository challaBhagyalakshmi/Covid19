const country = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/countries.js");
const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const sequelize = connection.sequelize;
const Country = country.country;

describe("Testing for countries model", () => {
  beforeEach(function() {
    sequelize.drop({ force: true });
  });
  it("testing countries model ", () => {
    Country.sync()
      .then(function() {
        Country.create({
          country_name: "india"
        });
      })
      .then(data => {
        expect(data.country_name).toBe("india");
      });
  });
  afterEach(function() {
    sequelize.drop({ force: true });
  });
});
