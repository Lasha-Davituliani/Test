const express = require("express");
const connectToDb = require("./config/connectToDb");
const app = express();
connectToDb();
app.listen(3030, () => {
  console.log("server running on http://localhost:3030");
});
