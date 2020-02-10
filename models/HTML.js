const mongoose = require("mongoose");
const schema = mongoose.Schema;

const htmlSchema = new schema({
  fileName: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("html", htmlSchema);
