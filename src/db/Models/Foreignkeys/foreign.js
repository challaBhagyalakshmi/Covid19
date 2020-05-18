const confirm = require("./confirm.js.js");
const recover = require("./recover.js.js");
const deaths = require("./deaths.js.js");

async function main() {
  await confirm.foreign_confirm();
  await recover.foreign_key_recover();
  await deaths.foreign_deaths();
}

main();
module.exports = { main };
