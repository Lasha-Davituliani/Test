const express = require("express");
const usersRouter = require("./routes/user.route");
const connectToDb = require("./config/connectToDb");

const app = express();
app.use(express.json());
connectToDb();
app.use("/users", usersRouter);
app.listen(3030, () => {
  console.log("server is running on http://localhost:3030");
});
