const http = require("http");
const app = require("./api/Middlewares/app.js/index.js");

const server = http.createServer(app);
server.listen(2019, () => {
  console.log("server starts running on port 2019");
});
