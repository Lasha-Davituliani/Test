const { isValidObjectId } = require("mongoose");
const expenseModel = require("../models/expense.model");
const userModel = require("../models/user.model");

const createExpense = async (req, res) => {
  try {
    const { amount, category, description } = req.body;
    const userId = req.userId;

    if (!amount || !category) {
      return res.status(400).json({
        message: "Amount and category are required",
        data: null,
      });
    }
    if (amount <= 0) {
      return res.status(400).json({
        message: "Amount must be a positive number",
        data: null,
      });
    }
    const newExpense = await expenseModel.create({
      amount,
      category,
      description: description || "",
      user: userId,
    });
    await userModel.findByIdAndUpdate(userId, {
      $push: { expenses: newExpense._id },
    });

    res.status(201).json({
      message: "Expense created successfully!",
      data: newExpense,
    });
  } catch (error) {
    console.error("Error creating expense:", error);
    res.status(500).json({
      message: "Internal server error",
      data: null,
    });
  }
};

const findAllExpenses = async (req, res) => {
  try {
    const userId = req.userId;
    const allExpense = await expenseModel.find({ user: userId });
    res.json({ message: "Successfully", data: allExpense });
  } catch (error) {
    res.status(500).json({ message: "Server error", data: null });
  }
};

const findExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "invalid id", data: null });
    }

    const findById = await expenseModel
      .findOne({ _id: id, user: userId })
      .populate("user", "-password");
    if (!findById) {
      return res.status(404).json({ message: "Expense not found", data: null });
    }

    res.json({ message: "Successfully", data: findById });
  } catch (error) {
    res.status(500).json({ message: "Server error", data: null });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "invalid id", data: null });
    }

    const deletedExpense = await expenseModel.findOneAndDelete({
      _id: id,
      user: userId,
    });

    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found", data: null });
    }

    await userModel.findByIdAndUpdate(userId, { $pull: { expenses: id } });

    res.json({
      message: "expense is deleted successfully!",
      data: deletedExpense,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", data: null });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, category, description } = req.body;
    const userId = req.userId;

    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "invalid id", data: null });
    }

    const updatedExpense = await expenseModel.findOneAndUpdate(
      { _id: id, user: userId },
      { amount, category, description },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found", data: null });
    }

    res.json({
      message: "expense is successfully updated!",
      data: updatedExpense,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", data: null });
  }
};

module.exports = {
  findAllExpenses,
  findExpenseById,
  deleteExpense,
  updateExpense,
  createExpense,
};
