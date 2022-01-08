import express from 'express'
const router = express.Router()
import {
  getAllIncomes,
  getIncomeDetail,
  createIncome,
  updateIncome,
  deleteIncome
} from '../controllers/incomeController.js'
import { protect } from '../middleware/authMiddleware.js'

router
    .route('/')
    .post(protect, createIncome)
    .get(protect, getAllIncomes)
router
  .route('/:id')
  .get(protect, getIncomeDetail)
  .patch(protect, updateIncome)
  .delete(protect, deleteIncome)

export default router
