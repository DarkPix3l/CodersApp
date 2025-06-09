import Coder from '../models/topCoderSchema.js'; 

export const getLeaderboard = async (req, res) => {
  try {
    const coders = await Coder.find().sort({ score: -1 });
    res.status(200).json(coders);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getTopCoders = async (req, res) => {
  const k = parseInt(req.query.k);
  try {
    const topCoders = await Coder.find().sort({ score: -1 }).limit(k);
    res.status(200).json(topCoders);
  } catch (error) {
    console.error("Error fetching top coders:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createCoder = async (req, res) => {
  try {
    const { username, email, score = 0, challengesSolved = []} = req.body;

    const newCoder = new Coder({
      username,
      email,
      score,
      challengesSolved
    });

    await newCoder.save();
    res.status(201).json({ message: 'Coder created successfully', coder: newCoder });
  } catch (error) {
    console.error('Error creating coder:', error);
    res.status(500).json({ error: 'Server error' });
  }
};