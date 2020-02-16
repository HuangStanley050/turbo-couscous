const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadFile");
const isAuth = require("../middlewares/isAuth");
const dataController = require("../controllers/data");

router
  .post("/api/upload", isAuth, upload.single("html"), dataController.upload)
  .get("/api/resources", isAuth, (req, res) => {
    res.send("you made it pass the middleware");
  })
  .get("/api/resources/:fileId", isAuth, dataController.getDownload);
module.exports = router;
