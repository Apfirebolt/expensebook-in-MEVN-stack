import express from 'express'
const router = express.Router()
import {
  getAllGoals,
  getGoalDetail,
  createGoal,
  updateGoal,
  deleteGoal
} from '../controllers/goalController.js'
import { protect } from '../middleware/authMiddleware.js'

router
    .route('/')
    .post(protect, createGoal)
    .get(protect, getAllGoals)
router
  .route('/:id')
  .get(protect, getGoalDetail)
  .patch(protect, updateGoal)
  .delete(protect, deleteGoal)

export default router
