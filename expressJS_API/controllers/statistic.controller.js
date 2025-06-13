import Category from '../models/categorySchema.js';
import Challenge from '../models/challengesSchema.js';
import Coder from '../models/topCoderSchema.js';
/* import Submission from '../models/submissionSchema.js';  TO BE IMPLEMENTED*/ 


//all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Trending categories 
export const getTrendingCategories = async (req, res) => {
  try {
    const trending = await Challenge.aggregate([
      { $unwind: "$category" },
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.status(200).json({ trendingCategories: trending });
  } catch (error) {
    console.error('Error getting trending categories:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


// Solved challenges by difficulty level
export const getSolvedStats = async (req, res) => {
  const coderId = req.params.id;

  try {
    const coder = await Coder.findById(coderId).populate('challengesSolved');

    if (!coder) {
      return res.status(404).json({ error: 'Coder not found' });
    }

    const stats = { Easy: 0, Moderate: 0, Hard: 0 };

    for (const challenge of coder.challengesSolved) {
      const level = challenge.level;
      if (stats[level] !== undefined) {
        stats[level]++;
      }
    }

    res.status(200).json({ solvedStats: stats });
  } catch (error) {
    console.error('Error getting solved stats:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


// Heatmap (trigger a re-fetch after solving a challenge in frontend?)
export const getHeatmapData = async (req, res) => {
  const coderId = req.params.id;
  const { start_date, end_date } = req.query;

  try {
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    const heatmap = await Submission.aggregate([
      {
        $match: {
          coder: coderId,
          correct: true,
          createdAt: { $gte: startDate, $lte: endDate }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          date: "$_id",
          count: 1
        }
      },
      { $sort: { date: 1 } }
    ]);

    res.status(200).json({ heatmap });
  } catch (error) {
    console.error('Error getting heatmap data:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
