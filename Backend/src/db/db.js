const db = require("mongoose");

function connectDB() {
  db.connect(process.env.MONGODB_URL)
    .then(() => console.log("connect to database."))
    .catch((error) => console.log("Error connecting to MongoDB", error));
}

module.exports = connectDB;
