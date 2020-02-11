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
  let timeStamp = Date.now();
  pdf
    .create(html, options)
    .toFile(`./temp/${fileName}-${timeStamp}.pdf`, err => {
      if (err) return console.log(err);
      //console.log(res); // { filename: '/app/businesscard.pdf' }
      const bucketFileName = `${fileName}-${timeStamp}.pdf`;
      const file = bucket.file(bucketFileName);
      fs.createReadStream(`./temp/${bucketFileName}`)
        .pipe(file.createWriteStream())
        .on("error", err => console.log(err))
        .on("finish", () => {
          console.log("finished");
          return res.send("Upload completed");
        });
    });
};
