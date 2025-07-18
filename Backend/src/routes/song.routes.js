const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/song", upload.single("audio"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  
  res.status(201).json({
    message: "created successfully.",
    song: req.body,
  });
});

router.get("/test", (req, res) => {
  res.send("Test route working");
});


module.exports = router;
