const fs = require("fs");
const pdf = require("html-pdf");

exports.upload = async (req, res) => {
  let html;
  const options = { format: "Letter" };
  const bucket = req.app.get("bucket");
  const fileName =
    req.file.originalname.substr(0, req.file.originalname.lastIndexOf(".")) ||
    req.file.originalname;

  try {
    html = await fs.promises.readFile(
      `./temp/${req.file.originalname}`,
      "utf8"
    );
  } catch (err) {
    console.log(err);
  }

  pdf
    .create(html, options)
    .toFile(`./temp/${fileName}-${Date.now()}.pdf`, function(err, res) {
      if (err) return console.log(err);
      //console.log(res); // { filename: '/app/businesscard.pdf' }
    });

  const file = bucket.file("test.html");
  fs.createReadStream("./temp/test.html")
    .pipe(file.createWriteStream())
    .on("error", err => console.log(err))
    .on("finish", () => console.log("finished"));
  res.send("hello");
};
