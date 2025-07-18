const express = require("express");
const songRoutes = require("./routes/song.routes");

const app = express();
app.use(express.json());

app.use("/song", songRoutes);
module.exports = app;
console.log("App loaded, route /song registered...");
