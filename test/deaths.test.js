const deaths = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/deaths.js");
const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const sequelize = connection.sequelize;
const Deaths = deaths.Deaths;

describe("Deaths model ", () => {
  beforeEach(function() {
    sequelize.drop({ force: true });
  });
  it("inserting the new record", () => {
    let value = 1;
    fs.createReadStream(
      "/Users/bhagyalakshmi/Documents/COVID_19/src/data/csv_files/deaths.csv"
    )
      .on("data", row => {
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
            expect(id).toBe(value);
          });
        value = value + 1;
      })
      .on("end", () => {});
  });
  afterEach(function() {
    sequelize.drop();
  });
});
