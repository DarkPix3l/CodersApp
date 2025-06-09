import express from 'express';
import { createChallenge, getAllChallenges } from '../controllers/challenge.controller.js';
import { validateChallenge } from '../middlewares/challengeValidator.js';
import { listChallenges } from '../controllers/challenge.controller.js';
import { getChallengeById } from '../controllers/challenge.controller.js';
import { validateObjectId } from '../middlewares/idValidator.js';

const router = express.Router();


router.get('/', getAllChallenges);//see all the created the challenges
router.get('/', listChallenges);
router.get("/:id", validateObjectId, getChallengeById);
router.post('/create', validateChallenge , createChallenge);


export default router;
