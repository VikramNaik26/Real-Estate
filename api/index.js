require('dotenv').config()

const express = require('express')
const connectDB = require('./db/connectDB')
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')

const app = express()

app.use(express.json())

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(3000, () => {
      console.log('server listening on port 3000....')
      // realEstateProject
    })
  } catch (error) {
    console.log(error)
  }
}

start()
