// event模块
const EventEmitter = require("events");
const emitter = new EventEmitter();
// 案例1
// 订阅事件
emitter.on("click", (params) => {
  console.log("click", params);
});

// 发布事件一次
emitter.emit("click", "demo");
// 发布事件两次
emitter.emit("click", "demo");

// ====================
// 案例2
// 如果只想让事件触发一次，可以使用 once 方法
emitter.once("once", (params) => {
  console.log("once", params);
});
emitter.emit("once", 123); // 只会执行一次
emitter.emit("once", 123);
