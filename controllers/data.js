const fs = require("fs");
const pdf = require("html-pdf");
const { format } = require("util");
const HTML = require("../models/HTML");
const PDF = require("../models/PDF");
const User = require("../models/User");
const bucketPath =
  "https://storage.googleapis.com/burger-react-bc897.appspot.com";

exports.getDownload = async (req, res) => {
  const { fileId } = req.params;
  const downloadUrl = await PDF.findById(fileId, "bucketLocation");
  res.send({ downloadUrl });
};
exports.upload = async (req, res) => {
  let html;
  let newHtmlPromise;
  let newPdfPromise;

  const userId = req.user._id;
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
    let newHtml = new HTML({
      //saving to collection HTML
      fileName: req.file.originalname,
      content: html,
      user: userId
    });
    newHtmlPromise = newHtml.save();
  } catch (err) {
    console.log(err);
  }

  let timeStamp = Date.now();

  pdf
    .create(html, options)
    .toFile(`./temp/${fileName}-${timeStamp}.pdf`, err => {
      if (err) return console.log(err);

      const bucketFileName = `${fileName}-${timeStamp}.pdf`;
      const file = bucket.file(bucketFileName);
      fs.createReadStream(`./temp/${bucketFileName}`)
        .pipe(file.createWriteStream())
        .on("error", err => console.log(err))
        .on("finish", async () => {
          const bucketLocation = format(`${bucketPath}/${bucketFileName}`);
          let newPdf = new PDF({
            fileName: bucketFileName,
            bucketLocation,
            user: userId
          });
          newPdfPromise = newPdf.save();
          let result = await Promise.all([newPdfPromise, newHtmlPromise]);
          let pdfId = result[0]._id;
          let htmlId = result[1]._id;
          await User.findByIdAndUpdate(userId, {
            $push: { pdf: pdfId, html: htmlId }
          });

          return res.send({ path: bucketLocation });
        });
    });
};
