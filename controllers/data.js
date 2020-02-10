exports.upload = (req, res) => {
  console.log("this is upload route");
  console.log(req.file);
  res.send("hello");
};
