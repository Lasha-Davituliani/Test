const { Router } = require("express");
const userService = require("./users.service.js");
const usersRouter = Router();

usersRouter.get("/", userService.getAll);
usersRouter.get("/paginated", userService.getPaginated);
usersRouter.get("/:id", userService.getById);
usersRouter.post("/", userService.create);
usersRouter.put("/:id", userService.update);
usersRouter.delete("/:id", userService.delete);
module.exports = usersRouter;
