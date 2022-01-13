import asyncHandler from "express-async-handler";
import Policy from "../models/investmentModel.js";

// @desc    Create a Policy for logged in users
// @route   POST /api/policies
// @access  Private
const createPolicy = asyncHandler(async (req, res) => {
  const {
    name,
    vendorName,
    description,
    premiumAmount,
    coverAmount,
    premiumDate,
    links,
    premiumPeriod,
  } = req.body;
  const investment = await Policy.create({
    name,
    vendorName,
    premiumPeriod,
    premiumAmount,
    coverAmount,
    description,
    premiumDate,
    links,
    createdBy: req.user._id,
  });
  if (investment) {
    res.status(201).json(investment);
  } else {
    res.status(400);
    throw new Error("Invalid investment data");
  }
});

// @desc    Update an existing Policy
// @route   PATCH /api/policies/:id
// @access  Private
const updatePolicy = asyncHandler(async (req, res) => {
  const investment = await Policy.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  if (investment) {
    res.json(investment);
  } else {
    res.status(404);
    throw new Error("Policy not found");
  }
});

// @desc    Get details for a single policy
// @route   GET /api/policies/:id
// @access  Private
const getPolicyDetail = asyncHandler(async (req, res) => {
  const policy = await Policy.findOne({
    createdBy: req.user._id,
    _id: req.params.id,
  });

  if (policy) {
    res.json({
      policy,
    });
  } else {
    res.status(404);
    throw new Error("Policy not found");
  }
});

// @desc    Get all user policies
// @route   PUT /api/policies
// @access  Private
const getAllPolicies = asyncHandler(async (req, res) => {
  const policies = await Policy.find({
    createdBy: req.user._id,
  });
  res.json({
    policies,
  });
});

// @desc    Delete user investment
// @route   DELETE /api/investment/:id
// @access  Private
const deletePolicy = asyncHandler(async (req, res) => {
  const isPolicyDeleted = await Policy.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isPolicyDeleted) {
    res.json({
      message: "Policy deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Policy not found");
  }
});

export {
  createPolicy,
  getPolicyDetail,
  deletePolicy,
  updatePolicy,
  getAllPolicies,
};
