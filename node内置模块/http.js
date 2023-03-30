const http = require("http");
const port = 3000;
const host = "127.0.0.1";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("hello, world!!");
});
server.listen(port, host, () => {
  console.log("server run at port 3000");
});
