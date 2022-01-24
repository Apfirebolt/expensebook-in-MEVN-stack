import asyncHandler from "express-async-handler";
import Expense from "../models/expenseModel.js";
import { Parser } from "json2csv";
import fs from "fs";

// @desc    Create an Expense for logged in users
// @route   POST /api/expenses
// @access  Private
const createExpense = asyncHandler(async (req, res) => {
  const { note, amount, date, expenseType } = req.body;
  const expense = await Expense.create({
    note,
    expenseType,
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

  const expense = await Expense.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
      useFindAndModify: false,
    }
  );

  if (expense) {
    res.json(expense);
  } else {
    res.status(404);
    throw new Error("Expense not found");
  }
});

// @desc    Get details for a single expense profile
// @route   GET /api/expenses/:id
// @access  Private
const getExpenseDetail = asyncHandler(async (req, res) => {
  const expense = await Expense.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (expense) {
    res.json({
      expense,
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
  const itemsPerPage = 5;
  const startPage = req.query.page || 1;
  await Expense.find({
    createdBy: req.user._id,
  })
  .skip(itemsPerPage * startPage - itemsPerPage)
    .limit(itemsPerPage)
    .exec(function (err, expenses) {
      Expense.countDocuments().exec(function (err, count) {
        if (err) return next(err);
        res.status(200).json({
          expenses,
          count,
          success: true,
          itemsPerPage,
          startPage,
          lastPage: Math.ceil(count / itemsPerPage),
        });
      });
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

// @desc    Export Expense data as csv file
// @route   GET /api/expenses/csv-export
// @access  Private
const csvExpenseExport = asyncHandler(async (req, res) => {
  const fields = [
    {
      label: "Amount",
      value: "amount",
    },
    {
      label: "Note",
      value: "note",
    },
    {
      label: "Expense Type",
      value: "expenseType",
    },
    {
      label: "Date",
      value: "date",
    },
  ];
  const expenses = await Expense.find({
    createdBy: req.user._id,
  });
  const json2csv = new Parser({ fields: fields });

  try {
    const csv = json2csv.parse(expenses);
    const path = "server/files/expense" + Date.now() + ".csv";
    fs.writeFile(path, csv, function (err, data) {
      if (err) {
        throw err;
      } else {
        res.status(200).download(path);
      }
    });
  } catch (error) {
    console.log("error:", error.message);
    res.status(500).send(error.message);
  }
});

export {
  createExpense,
  getExpenseDetail,
  deleteExpense,
  updateExpense,
  getAllExpenses,
  csvExpenseExport,
};
