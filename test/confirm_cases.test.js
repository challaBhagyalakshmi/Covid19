const confirm = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/confirm.js");
const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const csv = require("csv-parser");
const sequelize = connection.sequelize;
const Confirm = confirm.Confirm;

describe("Confirmation model ", () => {
  beforeEach(function() {
    sequelize.drop({ force: true });
  });
  it("testing the  confirmation model ", () => {
    fs.createReadStream(
      "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/confirmed.csv"
    ).on("data", row => {
      const value = row["4/28/20"];
      sequelize
        .sync()
        .then(function() {
          Confirm.create({
            "4/28/20": row["4/28/20"]
          });
        })
        .then(data => {
          expect(data["4/28/20"]).toBe(value);
        });
    });
  });
  afterEach(function() {
    sequelize.drop();
  });
});
