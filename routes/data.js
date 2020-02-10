const express = require("express");
const router = express.Router();
const Multer = require("multer");
const dataController = require("../controllers/data");

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
});

router.post("/api/upload", multer.single("html"), dataController.upload);
module.exports = router;
