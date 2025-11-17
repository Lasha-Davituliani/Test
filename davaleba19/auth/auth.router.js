const { Router } = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authRouter = Router();
authRouter.post("/sign-up", async (req, res) => {
  console.log("Request received:", req.method);
  console.log("Body:", req.body);
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res
      .status(400)
      .json({ message: "full name and email is required!" });
  }
  const exsistingUser = await userModel.findOne({ email: email });
  if (exsistingUser) {
    return res.status(400).json({ message: "same user alredy exsists!" });
  }
  console.log(password, "password");
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, "hashedpass");
  const createdUser = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  res.json({ message: "user created successfully", data: createdUser });
});

authRouter.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email and password is reqired!" });
  }
  const exsistingUser = await userModel.findOne({ email: email });
  if (!exsistingUser) {
    return res.status(400).json({ message: "invalid credentials" });
  }
  const isEqualPassword = await bcrypt.compare(
    password,
    exsistingUser.password
  );
  if (!isEqualPassword) {
    return res.status(400).json({ message: "invalid credentials" });
  }
  const payLoad = {
    userId: exsistingUser._id,
  };
  const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "toke generated successfully!", data: token });
});

module.exports = authRouter;
