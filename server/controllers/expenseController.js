import asyncHandler from "express-async-handler";
import Expense from "../models/expenseModel.js";

// @desc    Create an Expense for logged in users
// @route   POST /api/expenses
// @access  Private
const createExpense = asyncHandler(async (req, res) => {
    const { note, amount, date } = req.body;
    const expense = await Expense.create({
        note,
        amount,
        date,
        createdBy: req.user._id,
    });
    if (expense) {
        res.status(201).json(expense);
      } else {
        res.status(400);
        throw new Error("Invalid expense data");
      }
});

// @desc    Update an existing Expense
// @route   PATCH /api/expenses/:id
// @access  Private
const updateExpense = asyncHandler(async (req, res) => {
  const { amount, note, date } = req.body;

  const expense = await Expense.findOneAndUpdate({ createdBy: req.user._id, _id: req.params.id }, req.body, {
    new: true,
  });

  if (expense) {
    res.json(expense)
  } else {
    res.status(404)
    throw new Error('Expense not found')
  }
});

// @desc    Get details for a single expense profile
// @route   GET /api/expenses/:id
// @access  Private
const getExpenseDetail = asyncHandler(async (req, res) => {
    const expense = await Expense.findOne(
        { createdBy: req.user._id, _id: req.params.id },
      );
    
      if (expense) {
        res.json({
          expense
        });
      } else {
        res.status(404);
        throw new Error("Expense not found");
      }
});

// @desc    Get all user expenses
// @route   PUT /api/expenses
// @access  Private
const getAllExpenses = asyncHandler(async (req, res) => {
  const expenses = await Expense.find({
    createdBy: req.user._id,
  });
  res.json({
    expenses
  });
});

// @desc    Delete user expense
// @route   DELETE /api/expense/:id
// @access  Private
const deleteExpense = asyncHandler(async (req, res) => {
  const isExpenseDeleted = await Expense.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isExpenseDeleted) {
    res.json({
      message: "Expense deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Expense not found");
  }
});

export {
  createExpense,
  getExpenseDetail,
  deleteExpense,
  updateExpense,
  getAllExpenses,
};
