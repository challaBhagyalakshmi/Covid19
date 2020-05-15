const confirm = require("./confirmed");
const recover = require("./recovered_export");
const deaths = require("./deaths_export");

async function main() {
  await confirm.confirm_data_import_db();
  await recover.recovered_data_import_db();
  await deaths.deaths_data_import_db();
}

main();

module.exports = { main };
