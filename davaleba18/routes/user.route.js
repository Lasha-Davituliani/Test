const { Router } = require("express");
const { default: mongoose } = require("mongoose");
const userModel = require("../models/user.model");
const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  const findAllUsers = await userModel.find();
  res.json(findAllUsers);
});

usersRouter.post("/", async (req, res) => {
  const { name, age, email } = req.body;
  const createUser = await userModel.create({ name, age, email });
  res.json({ massage: "user is created successesfully", data: createUser });
});
module.exports = usersRouter;
