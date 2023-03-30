const express = require("express");
// 引入中间件
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
app.use(cookieParser()); // 使用中间件
app.use(bodyParser()); // 使用中间件
// 模块化的路由
const routes = require("./router");

app.use("/user", routes.user);
app.use("/timeline", routes.timeline);

app.listen(8080, () => {
  console.log("listen on 8080");
});
