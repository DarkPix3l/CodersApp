import mongoose from 'mongoose';

const codeTextSchema = new mongoose.Schema({
  language: { type: String, required: true },
  text: { type: String, required: true }
}, { _id: false });

const inputSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }
}, { _id: false });

const testInputSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true }
}, { _id: false });

const testCaseSchema = new mongoose.Schema({
  weight: { type: Number, required: true },
  inputs: { type: [testInputSchema], required: true },
  output: { type: mongoose.Schema.Types.Mixed, required: true }
}, { _id: false });

const codeSchema = new mongoose.Schema({
  function_name: { type: String, required: true },
  code_text: { type: [codeTextSchema], required: true },
  inputs: { type: [inputSchema], required: true }
}, { _id: false });

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: String, required: true },
  code: { type: codeSchema, required: true },
  tests: { type: [testCaseSchema], required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

export default mongoose.model('Challenge', challengeSchema);
