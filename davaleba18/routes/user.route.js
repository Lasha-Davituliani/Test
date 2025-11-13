const { Router } = require("express");
const {
  findAllUsers,
  findUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("./user.service");
const usersRouter = Router();

usersRouter.get("/", findAllUsers);
usersRouter.get("/:id", findUserById);
usersRouter.post("/", createUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.put("/:id", updateUser);
module.exports = usersRouter;
