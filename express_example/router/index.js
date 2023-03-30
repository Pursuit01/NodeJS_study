const user = require("./user");
const timeline = require("./timeline");
module.exports = {
  user,
  timeline,
};

// app.all("/", (req, res) => {
//   res.send("请求首页");
//   // res.json(req.headers);
// });
// app.get("/user/:id/detail/:detailId", (req, res) => {
//   console.log(req.params); // {id: '1', detailId: '2'}
//   res.send(req.params);
// });

// // 一个路由匹配多个路由函数
// const a = () => {};
// const b = () => {};
// app.get("/user/login", [a, b]);
// // 第二种写法
// app.get(
//   "/user",
//   (req, res, next) => {
//     next(); // 通过next传递下去
//   },
//   (req, res) => {
//     console.log("响应");
//   }
// );

// // 公共路由路径
// app
//   .route("/list")
//   .get((req, res) => {
//     console.log("处理get请求");
//   })
//   .post((req, res) => {
//     console.log("处理post请求");
//   });
