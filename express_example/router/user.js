const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("登陆");
});
router.get("/register", (req, res) => {
  res.send("注册");
});
module.exports = router;
