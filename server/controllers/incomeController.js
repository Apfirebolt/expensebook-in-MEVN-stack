import asyncHandler from "express-async-handler";
import Income from "../models/IncomeModel.js";

// @desc    Create an Income Source for logged in users
// @route   POST /api/income
// @access  Private
const createIncome = asyncHandler(async (req, res) => {
  const { source, content, period, amount } = req.body;
  const income = await Income.create({
    source,
    content,
    period,
    amount,
    createdBy: req.user._id,
  });
  if (income) {
    res.status(201).json(income);
  } else {
    res.status(400);
    throw new Error("Invalid Income data");
  }
});

// @desc    Update an existing Income
// @route   PATCH /api/income/:id
// @access  Private
const updateIncome = asyncHandler(async (req, res) => {

  const income = await Income.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  if (income) {
    res.json(income);
  } else {
    res.status(404);
    throw new Error("Income not found");
  }
});

// @desc    Get details for a single Income profile
// @route   GET /api/income/:id
// @access  Private
const getIncomeDetail = asyncHandler(async (req, res) => {
  const income = await Income.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (income) {
    res.json({
      Income,
    });
  } else {
    res.status(404);
    throw new Error("Income not found");
  }
});

// @desc    Get all user Incomes
// @route   PUT /api/income
// @access  Private
const getAllIncomes = asyncHandler(async (req, res) => {
  const incomes = await Income.find({
    createdBy: req.user._id,
  });
  res.json({
    incomes,
  });
});

// @desc    Delete user Income
// @route   DELETE /api/income/:id
// @access  Private
const deleteIncome = asyncHandler(async (req, res) => {
  const isIncomeDeleted = await Income.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isIncomeDeleted) {
    res.json({
      message: "Income deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Income not found");
  }
});

export { createIncome, getIncomeDetail, deleteIncome, updateIncome, getAllIncomes };
