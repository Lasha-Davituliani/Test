const { isValidObjectId } = require("mongoose");
const userModel = require("../models/user.model");

const findAllUsers = async (req, res) => {
  const allUsers = await userModel.find().select("-password");
  res.json({ massage: "Successfully", data: allUsers });
};
const findUserById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res
      .status(404)
      .json({ massage: "not found(invalid id)", data: null });
  }
  const findById = await userModel
    .findById(id)
    .select("-password")
    .populate({ path: "expenses", options: { sort: { createdAt: -1 } } });
  res.json({ massage: "Successfully", data: findById });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId) {
    return res.status(400).json({ massage: "invalid id", data: null });
  }
  const deleteUser = await userModel.findByIdAndDelete(id);
  res.json({ massage: "user deleted successfully!", data: deleteUser });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { fullName, email } = req.body;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ massage: "invalid is", data: null });
  }
  const updatedUser = await userModel.findByIdAndUpdate(
    id,
    { fullName, email },
    { new: true }
  );
  res.json({ massage: "user updated successfully", data: updatedUser });
};

module.exports = { findAllUsers, findUserById, deleteUser, updateUser };
