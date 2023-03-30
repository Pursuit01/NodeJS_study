const fs = require("fs");
fs.readFile("./a.txt", "utf-8", (err, res) => {
  console.log(res);
});

fs.writeFile("./b.txt", new Date().toString(), (err, res) => {
  console.log("write success");
});
// 如果b.txt存在，会覆盖之前的内容
fs.writeFile("./b.txt", new Date().toString() + "@@@", (err, res) => {
  console.log("write success");
});

// 追加内容
fs.appendFile("./b.txt", "哈哈哈", (e, r) => {
  console.log("append");
});

// 删除文件
fs.unlink("./b.txt", (e, r) => {
  console.log("delete");
});

// 读取文件夹
fs.readdir(".", (err, files) => {
  console.log(files); //[  'a.txt', 'event.js', 'fs.js', 'http.js' ]
});
