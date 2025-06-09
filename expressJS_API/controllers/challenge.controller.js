import Challenge from '../models/challengesSchema.js';

export const createChallenge = async (req, res) => {
  try {
    const challenge = new Challenge(req.body);
    await challenge.save();
    res.status(201).json({ message: 'Challenge created successfully' });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getAllChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const listChallenges = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};

    if (category) {
      filter.category = category;
    }

    const challenges = await Challenge.find(filter);
    res.status(200).json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) return res.status(404).send("Category not found");
    res.send(challenge);
  } catch (err) {
    res.status(500).send("Invalid ID or server error");
  }
};