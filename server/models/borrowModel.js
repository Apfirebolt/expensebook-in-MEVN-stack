import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    borrowedFrom: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    borrowedOn: {
      type: Date,
      required: true,
    },
    repayOn: {
      type: Date,
      required: true,
    },
    isSettled: {
      type: Boolean,
      required: false,
      default: false
    },
    interestApplied: {
      type: Boolean,
      required: false,
      default: false,  
    },
    interestRate: {
      type: Number,
      required: false,
      default: 0,  
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Borrow = mongoose.model("Borrow", borrowSchema);

export default Borrow;
