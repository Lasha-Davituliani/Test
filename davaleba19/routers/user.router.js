const { Router } = require("express");
const {
  findAllUsers,
  findUserById,
  deleteUser,
  updateUser,
} = require("./user.service");
const userRouter = Router();

userRouter.get("/", findAllUsers);
userRouter.get("/:id", findUserById);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
module.exports = userRouter;
