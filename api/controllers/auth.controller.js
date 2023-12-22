const User = require('../models/user.model')
const bcryptjs = require('bcryptjs')
const { errorHandler } = require('../utils/error')

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
    //   const user = await User.create(req.body)
    res
      .status(201)
      .json({ success: true, message: 'user created successfully' })
    // .json({ success: true, message: 'user created successfully', user: user })
  } catch (error) {
    // res.status(500).json({ error: error })
    // next(errorHandler(error.statusCode, error.message))
    next(error)
  }
}

module.exports = { signup }
