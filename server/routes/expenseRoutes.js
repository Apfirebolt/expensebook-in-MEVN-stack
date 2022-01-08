import express from 'express'
const router = express.Router()
import {
  getAllExpenses,
  getExpenseDetail,
  createExpense,
  updateExpense,
  deleteExpense
} from '../controllers/expenseController'
import { protect } from '../middleware/authMiddleware.js'

router
    .route('/')
    .post(protect, createExpense)
    .get(protect, getAllExpenses)
router
  .route('/:id')
  .get(protect, getExpenseDetail)
  .patch(protect, updateExpense)
  .delete(protect, deleteExpense)

export default router
