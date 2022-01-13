import express from 'express'
const router = express.Router()
import {
  getAllPolicies,
  getPolicyDetail,
  createPolicy,
  updatePolicy,
  deletePolicy
} from '../controllers/policyController.js'
import { protect } from '../middleware/authMiddleware.js'

router
    .route('/')
    .post(protect, createPolicy)
    .get(protect, getAllPolicies)
router
  .route('/:id')
  .get(protect, getPolicyDetail)
  .patch(protect, updatePolicy)
  .delete(protect, deletePolicy)

export default router
