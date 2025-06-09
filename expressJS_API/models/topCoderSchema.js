import mongoose from 'mongoose';

const coderSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 }, // For leaderboard ranking
  challengesSolved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
}, { timestamps: true });

const Coder = mongoose.model('Coder', coderSchema);
export default Coder;