const fs = require("fs");
const readStream = fs.createReadStream("./a.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./c.txt", { encoding: "utf-8" });
readStream.pipe(writeStream);
writeStream.on("finish", () => {
  console.log("写入完成");
});
