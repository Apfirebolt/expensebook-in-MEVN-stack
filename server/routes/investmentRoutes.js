import express from 'express'
const router = express.Router()
import {
  getAllInvestments,
  getInvestmentDetail,
  createInvestment,
  updateInvestment,
  deleteInvestment
} from '../controllers/investmentController.js'
import { protect } from '../middleware/authMiddleware.js'

router
    .route('/')
    .post(protect, createInvestment)
    .get(protect, getAllInvestments)
router
  .route('/:id')
  .get(protect, getInvestmentDetail)
  .patch(protect, updateInvestment)
  .delete(protect, deleteInvestment)

export default router
