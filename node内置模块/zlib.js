const fs = require("fs");
const zlib = require("zlib");
fs.createReadStream("./a.txt", { encoding: "utf-8" })
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("./a.js.gz"));

console.log("文件压缩完成");
