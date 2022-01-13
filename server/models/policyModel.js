import mongoose from "mongoose";

const policySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    premiumPeriod: {
      type: String,
      required: true,
    },
    premiumAmount: {
      type: Number,
      required: true,
    },
    coverAmount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    premiumDate: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    links: [
      {
        linkText: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Policy = mongoose.model("Policy", policySchema);

export default Policy;
