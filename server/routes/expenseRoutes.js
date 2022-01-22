import express from 'express'
const router = express.Router()
import {
  getAllExpenses,
  getExpenseDetail,
  createExpense,
  updateExpense,
  deleteExpense,
  csvExpenseExport
} from '../controllers/expenseController.js'
import { protect } from '../middleware/authMiddleware.js'

router
    .route('/')
    .post(protect, createExpense)
    .get(protect, getAllExpenses)
router
    .route('/csv-export')
    .get(protect, csvExpenseExport)
router
  .route('/:id')
  .get(protect, getExpenseDetail)
  .patch(protect, updateExpense)
  .delete(protect, deleteExpense)

export default router
