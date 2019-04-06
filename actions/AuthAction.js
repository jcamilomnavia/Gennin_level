const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { createUser, searchUserByEmail } = require('./UserActions')

// Replace this by env variable
const SECRET_KEY = process.env.SECRET_KEY

const signup = (data) => {
  return new Promise((resolve, reject) => {
    createUser(data).then(
      (user) => {
        const token = createToken(user)
        resolve(token)
      }
    ).catch(reject)
  })
}

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    searchUserByEmail(email).then((user) => {
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) reject(err)
        isValid ? resolve(createToken(user)) : reject(new Error('Password does not match'))
      })
    }
    ).catch(reject)
  })
}

const createToken = ({ email, _id }) => {
  const exp = new Date().addDays(1).getTime()
  const payload = {
    _id,
    email,
    exp
  }
  return jwt.sign(payload, SECRET_KEY)
}

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

module.exports = {
  signup,
  login
}
