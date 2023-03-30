const fs = require("fs");
// 开启一个 文件读取流
const stream = fs.createReadStream("./a.txt", { encoding: "utf-8" });
// 开启一个 文件写入流
const writeStream = fs.createWriteStream("./b.txt", { encoding: "utf-8" });

let data = "";
// 监听data事件 接收数据
stream.on("data", (chunk) => {
  data += chunk; // chunk 是本次读到的数据
  writeStream.write(chunk);
});

// 读取结束输出 data
stream.on("end", () => {
  writeStream.end();
  console.log("读取完成");
});

writeStream.on("finish", () => {
  console.log("写入完成");
});
