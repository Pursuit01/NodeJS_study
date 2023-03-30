const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "hello,world";
});

app.listen(10000, () => {
  console.log("listen on 10000");
});
