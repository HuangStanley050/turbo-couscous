const fs = require("fs");
const pdf = require("html-pdf");

exports.upload = async (req, res) => {
  let html;
  try {
    html = await fs.promises.readFile(
      `./temp/${req.file.originalname}`,

      "utf8"
    );
  } catch (err) {
    console.log(err);
  }
  const options = { format: "Letter" };

  pdf
    .create(html, options)
    .toFile(`./temp/${req.file.originalname}.pdf`, function(err, res) {
      if (err) return console.log(err);
      //console.log(res); // { filename: '/app/businesscard.pdf' }
    });

  console.log("this is upload route");

  res.send("hello");
};
