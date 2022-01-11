import express from 'express'
const router = express.Router()
import {
  getAllBorrow,
  getBorrowDetail,
  deleteBorrow,
  updateBorrow,
  createBorrow
} from '../controllers/borrowController.js'
import { protect } from '../middleware/authMiddleware.js'

router
    .route('/')
    .post(protect, createBorrow)
    .get(protect, getAllBorrow)
router
  .route('/:id')
  .get(protect, getBorrowDetail)
  .patch(protect, updateBorrow)
  .delete(protect, deleteBorrow)

export default router
