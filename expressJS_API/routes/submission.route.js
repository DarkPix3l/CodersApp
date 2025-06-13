import express from 'express';
import {validateSubmission} from '../middlewares/submission-validator.js'
import {createSubmission} from '../controllers/submission.controller.js'

const router = express.Router();

/* router.get('/all', getAllSubmissions); */
router.post('/', validateSubmission, createSubmission);


export default router;