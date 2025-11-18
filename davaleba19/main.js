const express = require("express");
const connectToMongoDb = require("./config/connectToDb");
const userRouter = require("./routers/user.router");
const authRouter = require("./auth/auth.router");
const expenseRouter = require("./routers/expense.router");
const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/expenses", expenseRouter);
connectToMongoDb();
app.listen(8080, () => {
  console.log("server running on http://localhost:8080");
});
