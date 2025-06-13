import express from 'express';
import {validateObjectId} from '../middlewares/idValidator.js'
import {
  getSolvedStats,
  getTrendingCategories,
  getAllCategories,
  getHeatmapData
} from '../controllers/statistic.controller.js';

const router = express.Router();

router.get('/all-categories', getAllCategories);
router.get('/trending-categories', getTrendingCategories);
router.get('/:id/solved-stats', validateObjectId, getSolvedStats);
router.get('/:id/heatmap', validateObjectId, getHeatmapData);

export default router;