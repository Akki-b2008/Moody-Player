const express = require("express");
const multer = require("multer");
const router = express.Router();
const uploadFile = require("../services/imagekit.service");
const songModel = require("../models/song.model");

router.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

router.post("/song", upload.single("audio"), async (req, res) => {
 let data = await uploadFile(req.file);

 let result = await songModel.create({
    title: req.body.title,
    artist: req.body.artist,
    url: data.url,
    mood: req.body.mood,
  });

  res.status(201).json({
    message: "created successfully.",
    result,
  });
});

router.get("/song", async (req, res) => {
  let data = await songModel.find({
    mood: req.query.mood,
  });
  res.status(201).json({
    message: "data fetched successfully.",
    data,
  });
});

module.exports = router;
