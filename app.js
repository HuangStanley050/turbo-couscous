const express = require("express");
const dataRouter = require("./routes/data");
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send("Hello"));
app.use(dataRouter);

module.exports = app;
