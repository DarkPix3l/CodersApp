import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  color: {
    type: String,
  },
});

export default mongoose.model("Category", categorySchema);
