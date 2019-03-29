const User = require('../models/User')

const createUser = (data) => {
  const { name, email, level, password } = data
  return User.create({ name, email, level, password })
    .then((user) => user)
    .catch((err) => {
      console.log(err)
    })
}

const updateUser = (id, data) => {
  return User.findByIdAndUpdate(id, { $set: data }, { new: true })
    .populate({ path: 'posts' })
    .then((userUpdated) => userUpdated)
}

module.exports = {
  createUser,
  updateUser
}
