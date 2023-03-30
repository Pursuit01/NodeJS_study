const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.send("获取列表");
});
router.get("/", (req, res) => {
  res.download("../a.txt", "a", (err) => {
    err && console.log(err);
    !err && console.log("下载成功");
  });
  res.json({ cookies: req.cookies });
});
router.post("/", (req, res) => {
  res.send({ a: 1 });
});

module.exports = router;
