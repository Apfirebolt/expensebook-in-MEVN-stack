import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema(
  {
    amount: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    source: {
      type: String,
      required: false,
    },
    period: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
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

const Income = mongoose.model("Income", incomeSchema);

export default Income;
