import mongoose from "mongoose";

const policySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    vendorName: {
      type: String,
      required: false,
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
      required: false,
    },
    premiumDate: {
      type: Date,
      required: false,
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
