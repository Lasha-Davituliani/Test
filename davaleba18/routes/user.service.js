const { isValidObjectId } = require("mongoose");
const userModel = require("../models/user.model");

const findAllUsers = async (req, res) => {
  const allUsers = await userModel.find();
  res.json({ massage: "Successfully", data: allUsers });
};
const findUserById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res
      .status(404)
      .json({ massage: "not found(invalid id)", data: null });
  }
  const findById = await userModel.findById(id);
  res.json({ massage: "Successfully", data: findById });
};

const createUser = async (req, res) => {
  const { name, age, email } = req.body;
  if (!name || typeof name !== "string" || !age || !email) {
    return res
      .status(400)
      .json({
        massage: "name must be a string, age and email is require fields",
        data: null,
      });
  }
  const exsistingEmail = await userModel.findOne({ email: email });
  if (exsistingEmail) {
    return res
      .status(400)
      .json({ massage: "email already exsists", data: null });
  }
  const createUser = await userModel.create({ name, age, email });
  res.json({ massage: "created succssesfully", data: createUser });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res
      .status(404)
      .json({ massage: "not found (invalid Id)", data: null });
  }
  const deleteUser = await userModel.findByIdAndDelete(id);
  res.json({ massage: "deleted succssesfully", data: deleteUser });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  if (!isValidObjectId) {
    return res.status(404).json({ massage: "not found", data: null });
  }
  const findUserAndUpdate = await userModel.findByIdAndUpdate(
    id,
    { name, age, email },
    { new: true }
  );
  res.json({ massage: "updated successesfully", data: findUserAndUpdate });
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  deleteUser,
  updateUser,
};
