const express = require("express");
const admin = require("firebase-admin");
const dataRouter = require("./routes/data");
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const serviceAccount = require("./burger-react-bc897-firebase-adminsdk-qfgmr-feec2b5006");

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongo connected");
  })
  .catch(err => console.log(err));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://burger-react-bc897.appspot.com"
});

const bucket = admin.storage().bucket();
app.set("bucket", bucket);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello"));
app.use(dataRouter);
app.use(authRouter);

module.exports = app;
