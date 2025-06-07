import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isManager: {
      type: Boolean,
      default: false,
    },
    /*     createdAt: {
      type: Date,
      default: new Date(),
    }, */
  },
  { timestamps: true } // For each instance you will have createdAt and updatedAt
);

export default mongoose.model("User", userSchema);
