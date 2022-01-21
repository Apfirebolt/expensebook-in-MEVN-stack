import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { notFound, errorHandler } from './server/middleware/errorMiddleware.js'
import connectDB from './server/config/db.js'

import userRoutes from './server/routes/authRoutes.js'
import expenseRoutes from './server/routes/expenseRoutes.js'
import goalRoutes from './server/routes/goalRoutes.js'
import incomeRoutes from './server/routes/incomeRoutes.js'
import borrowRoutes from './server/routes/borrowRoutes.js'
import investmentRoutes from './server/routes/investmentRoutes.js'
import policyRoutes from './server/routes/policyRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

const __dirname = path.resolve()

app.use('/api/users', userRoutes)
app.use('/api/expense', expenseRoutes)
app.use('/api/goals', goalRoutes)
app.use('/api/income', incomeRoutes)
app.use('/api/borrow', borrowRoutes)
app.use('/api/investments', investmentRoutes)
app.use('/api/policies', policyRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
