const { parse } = require("node-html-parser");
exports.upload = (req, res) => {
  console.log("this is upload route");
  console.log(req.file.buffer.toString("utf8"));
  res.send("hello");
};
