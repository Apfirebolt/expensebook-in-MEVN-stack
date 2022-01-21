import asyncHandler from "express-async-handler";
import Investment from "../models/investmentModel.js";

// @desc    Create an Investment for logged in users
// @route   POST /api/investments
// @access  Private
const createInvestment = asyncHandler(async (req, res) => {
    const { type, assetName, description, duration, startDate, endDate, quantity, amount, rateOfInterest } = req.body;
    const investment = await Investment.create({
        type,
        assetName,
        description,
        duration,
        startDate,
        endDate,
        amount,
        rateOfInterest,
        quantity,
        createdBy: req.user._id,
    });
    if (investment) {
        res.status(201).json(investment);
      } else {
        res.status(400);
        throw new Error("Invalid investment data");
      }
});

// @desc    Update an existing Investment
// @route   PATCH /api/investments/:id
// @access  Private
const updateInvestment = asyncHandler(async (req, res) => {
  const investment = await Investment.findOneAndUpdate({ createdBy: req.user._id, _id: req.params.id }, req.body, {
    new: true,
    useFindAndModify: false,
  });

  if (investment) {
    res.json(investment)
  } else {
    res.status(404)
    throw new Error('Investment not found')
  }
});

// @desc    Get details for a single investment profile
// @route   GET /api/investments/:id
// @access  Private
const getInvestmentDetail = asyncHandler(async (req, res) => {
    const investment = await Investment.findOne(
        { createdBy: req.user._id, _id: req.params.id },
      );
    
      if (investment) {
        res.json({
          investment
        });
      } else {
        res.status(404);
        throw new Error("Investment not found");
      }
});

// @desc    Get all user investments
// @route   PUT /api/investments
// @access  Private
const getAllInvestments = asyncHandler(async (req, res) => {
  const investments = await Investment.find({
    createdBy: req.user._id,
  });
  res.json({
    investments
  });
});

// @desc    Delete user investment
// @route   DELETE /api/investment/:id
// @access  Private
const deleteInvestment = asyncHandler(async (req, res) => {
  const isInvestmentDeleted = await Investment.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isInvestmentDeleted) {
    res.json({
      message: "Investment deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Investment not found");
  }
});

export {
  createInvestment,
  getInvestmentDetail,
  deleteInvestment,
  updateInvestment,
  getAllInvestments,
};
