import asyncHandler from "express-async-handler";
import Borrow from "../models/borrowModel.js";

// @desc    Create a Borrow for logged in users
// @route   POST /api/borrow
// @access  Private
const createBorrow = asyncHandler(async (req, res) => {
  const {
    note,
    amount,
    borrowedFrom,
    borrowedOn,
    repayOn,
    interestRate,
    interestApplied,
  } = req.body;
  const borrow = await Borrow.create({
    note,
    amount,
    borrowedFrom,
    borrowedOn,
    repayOn,
    interestRate,
    interestApplied,
    createdBy: req.user._id,
  });
  if (borrow) {
    res.status(201).json(borrow);
  } else {
    res.status(400);
    throw new Error("Invalid borrow data");
  }
});

// @desc    Update Borrow
// @route   PATCH /api/borrow/:id
// @access  Private
const updateBorrow = asyncHandler(async (req, res) => {
  const borrow = await Borrow.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      useFindAndModify: false,
      new: true,
    }
  );

  if (borrow) {
    res.json(borrow);
  } else {
    res.status(404);
    throw new Error("Borrow not found");
  }
});

// @desc    Get details for a single borrow data
// @route   GET /api/borrow/:id
// @access  Private
const getBorrowDetail = asyncHandler(async (req, res) => {
  const borrow = await Borrow.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (borrow) {
    res.json({
      borrow,
    });
  } else {
    res.status(404);
    throw new Error("Borrow not found");
  }
});

// @desc    Get all user borrow
// @route   GET /api/borrow
// @access  Private
const getAllBorrow = asyncHandler(async (req, res) => {
  const itemsPerPage = 5;
  const startPage = req.query.page || 1;
  await Borrow.find({
    createdBy: req.user._id,
  })
  .skip(itemsPerPage * startPage - itemsPerPage)
    .limit(itemsPerPage)
    .exec(function (err, borrowing) {
      Borrow.countDocuments().exec(function (err, count) {
        if (err) return next(err);
        res.status(200).json({
          borrowing,
          count,
          success: true,
          itemsPerPage,
          startPage,
          lastPage: Math.ceil(count / itemsPerPage),
        });
      });
    });
});

// @desc    Delete user borrow
// @route   DELETE /api/borrow/:id
// @access  Private
const deleteBorrow = asyncHandler(async (req, res) => {
  const isBorrowDeleted = await Borrow.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isBorrowDeleted) {
    res.json({
      message: "Borrow deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Borrow not found");
  }
});

export {
  createBorrow,
  getBorrowDetail,
  getAllBorrow,
  updateBorrow,
  deleteBorrow,
};
