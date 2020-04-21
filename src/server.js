const http = require("http");
const app = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/routes/app.js");

const server = http.createServer(app);
server.listen(2019, () => {
  console.log("server starts running on port 2019");
});
