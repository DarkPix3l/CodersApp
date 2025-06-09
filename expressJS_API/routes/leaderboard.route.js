import express from "express";
import { getLeaderboard, getTopCoders, createCoder } from "../controllers/leaderboard.controller.js";

const router = express.Router();

router.get("/", getLeaderboard);
router.get('/top', getTopCoders);
router.post('/create', createCoder);

export default router;
