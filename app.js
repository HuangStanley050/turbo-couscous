const express = require("express");
const admin = require("firebase-admin");
const dataRouter = require("./routes/data");
const serviceAccount = require("./burger-react-bc897-firebase-adminsdk-qfgmr-feec2b5006");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(JSON.stringify(serviceAccount)),
  storageBucket: "gs://burger-react-bc897.appspot.com"
});

const bucket = admin.storage().bucket();
app.set("bucket", bucket);
app.use(express.json());
app.get("/", (req, res) => res.send("Hello"));
app.use(dataRouter);

module.exports = app;
