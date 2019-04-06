const jwt = require('jsonwebtoken')
const { getUserById } = require('../actions')

const SECRET_KEY = process.env.SECRET_KEY

function getUserId (context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('JWT ', '')
    const { _id } = jwt.verify(token, SECRET_KEY)
    return getUserById(_id)
  }
  throw new Error('Not authenticated')
}

module.exports = {
  getUserId
}
