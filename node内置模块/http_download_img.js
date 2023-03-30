const https = require("https");
const fs = require("fs");
const url =
  "https://avatars.githubusercontent.com/u/62646653?s=400&u=513fa39f9942e19aa09b72d7076d989378835412&v=4";

const req = https.request(url, (res) => {
  console.log("响应状态码", res.statusCode);
  res.pipe(fs.createWriteStream("./logo.png"));
});
req.end();
