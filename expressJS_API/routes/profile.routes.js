import express from 'express';
import {
  getCoderProfile,
  updateInfo,
  getManagerProfile,
} from '../controllers/profile.controller.js';
import { validateUpdateProfile } from '../middlewares/profile-update-validator.js';
import {validateObjectId} from '../middlewares/idValidator.js'


const router = express.Router();

// Coders
router.get('/coder/:id', validateObjectId, getCoderProfile);
router.patch('/coder/:id/update-info', validateObjectId, validateUpdateProfile, updateInfo);

// Managers
router.get('/manager/:id', validateObjectId,  getManagerProfile);
router.patch('/manager/:id/update-info', validateObjectId, validateUpdateProfile, updateInfo);

export default router;