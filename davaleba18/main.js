const express = require("express");
require("dotenv").config();
const connectToMongoDb = require("./config/connectToMongoDb");
const usersRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");

const app = express();
app.use(express.json());
connectToMongoDb();
app.use("/users", usersRouter);
app.use("/products", productRouter);
app.listen(3030, () => {
  console.log("server is running on http://localhost:3030");
});
