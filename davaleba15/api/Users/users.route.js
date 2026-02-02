const { Router } = require("express");

const usersRouter = Router();

const users = [
  {
    id: 1,
    name: "Lasha",
    age: 34,
  },
  {
    id: 2,
    name: "Lasha",
    age: 34,
  },
  {
    id: 3,
    name: "Lasha",
    age: 34,
  },
  {
    id: 4,
    name: "Lasha",
    age: 34,
  },
];

usersRouter.get("/", (req, res) => {
  res.json(users);
});
module.exports = usersRouter;
