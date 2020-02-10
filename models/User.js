const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  email: String,
  password: String,
  html: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "html"
    }
  ],
  pdf: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pdf"
    }
  ]
});

module.exports = mongoose.model("user", userSchema);
