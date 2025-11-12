const express = require("express");
const connectToMongoDb = require("./config/connectToMongoDb");
const usersRouter = require("./routes/user.route");

const app = express();
app.use(express.json());
connectToMongoDb();
app.use("/users", usersRouter);
app.listen(3030, () => {
  console.log("server is running on http://localhost:3030");
});
