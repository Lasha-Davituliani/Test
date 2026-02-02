const { Router } = require("express");
const isAuth = require("../middlewares/isAuth.middleware");
const {
  findAllExpenses,
  findExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("./expense.service");

const expenseRouter = Router();

expenseRouter.get("/", isAuth, findAllExpenses);
expenseRouter.get("/:id", isAuth, findExpenseById);
expenseRouter.post("/", isAuth, createExpense);
expenseRouter.put("/:id", isAuth, updateExpense);
expenseRouter.delete("/:id", isAuth, deleteExpense);

module.exports = expenseRouter;
