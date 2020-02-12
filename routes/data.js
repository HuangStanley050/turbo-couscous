const express = require("express");
const router = express.Router();
const Multer = require("multer");
const isAuth = require("../middlewares/isAuth");
const dataController = require("../controllers/data");

// const multer = Multer({
//   storage: Multer.memoryStorage(),
//   limits: {
//     fileSize: 10 * 1024 * 1024 // no larger than 5mb, you can change as needed.
//   }
// });
const storage = Multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./temp");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = Multer({ storage: storage });

router
  .post("/api/upload", isAuth, upload.single("html"), dataController.upload)
  .get("/api/resources", isAuth, (req, res) => {
    res.send("you made it pass the middleware");
  });
module.exports = router;
