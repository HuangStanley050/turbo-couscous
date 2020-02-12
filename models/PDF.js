const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pdfSchema = new schema(
  {
    fileName: String,
    bucketLocation: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("pdf", pdfSchema);
