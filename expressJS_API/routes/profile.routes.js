import express from 'express';
import {
  getCoderProfile,
  updateInfo,
  getManagerProfile,
} from '../controllers/profile.controller.js';

import { validateUpdateProfile } from '../middlewares/profile-update-validator.js'; // optional Joi middleware

const router = express.Router();

// Coders
router.get('/coder/:id', getCoderProfile);
router.patch('/coder/:id/update-info', validateUpdateProfile, updateInfo);

// Managers
router.get('/manager/:id', getManagerProfile);
router.patch('/manager/:id/update-info', validateUpdateProfile, updateInfo);

export default router;