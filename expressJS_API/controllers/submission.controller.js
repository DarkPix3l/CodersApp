import Challenge from '../models/challengesSchema.js';
/* import Submission from '../models/submissionSchema.js'; */

export const createSubmission = async (req, res) => {
  const { lang, code, challenge_id } = req.body;

  try {
    const challenge = await Challenge.findById(challenge_id);
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    // Simulate grading logic
    const isCorrect = code.includes('return') && code.length > 10; 

    // NEEDS SCHEMA
    const submission = new Submission({ 
      challenge: challenge_id,
      language: lang,
      code,
      status: isCorrect ? 'correct' : 'incorrect',
    });
    await submission.save();

    return res.status(200).json({
      message: isCorrect ? 'Correct submission!' : 'Incorrect submission.',
      status: isCorrect ? 'passed' : 'failed',
    });

  } catch (error) {
    console.error("Submission error:", error);
    res.status(500).json({ error: 'Server error' });
  }
};
