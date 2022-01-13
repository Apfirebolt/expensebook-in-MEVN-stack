import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    assetName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    rateOfInterest: {
      type: Number,
      required: false,
    },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
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

const Investment = mongoose.model("Investment", investmentSchema);

export default Investment;
