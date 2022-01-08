import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.js";

// @desc    Create an Goal for logged in users
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  const { title, content, status, duration, amount } = req.body;
  console.log('Req body for goal ', req.body);
  const goal = await Goal.create({
    title,
    content,
    status,
    duration,
    amount,
    createdBy: req.user._id,
  });
  if (goal) {
    res.status(201).json(goal);
  } else {
    res.status(400);
    throw new Error("Invalid Goal data");
  }
});

// @desc    Update an existing Goal
// @route   PATCH /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {

  const goal = await Goal.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  if (goal) {
    res.json(goal);
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

// @desc    Get details for a single Goal profile
// @route   GET /api/goals/:id
// @access  Private
const getGoalDetail = asyncHandler(async (req, res) => {
  const goal = await Goal.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (goal) {
    res.json({
      goal,
    });
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

// @desc    Get all user Goals
// @route   PUT /api/goals
// @access  Private
const getAllGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({
    createdBy: req.user._id,
  });
  res.json({
    goals,
  });
});

// @desc    Delete user Goal
// @route   DELETE /api/goal/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const isGoalDeleted = await Goal.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isGoalDeleted) {
    res.json({
      message: "Goal deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Goal not found");
  }
});

export { createGoal, getGoalDetail, deleteGoal, updateGoal, getAllGoals };
