require("dotenv").config();// always write on first line
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();


app.listen(3000, () => {
  console.log("server is runnig on Port 3000.");
});
console.log("Server starting...");