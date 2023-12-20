require('dotenv').config()

const express = require('express')
const connectDB = require('./db/connectDB')

const app = express()

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
