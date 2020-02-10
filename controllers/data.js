const fs = require("fs");
const pdf = require("html-pdf");

exports.upload = (req, res) => {
  const html = fs.readFileSync(`./temp/${req.file.originalname}`, "utf8");
  const options = { format: "Letter" };
  pdf
    .create(html, options)
    .toFile(`./temp/${req.file.originalname}.pdf`, function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });
  console.log("this is upload route");

  res.send("hello");
};
