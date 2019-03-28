const Country = require('../models/Country')
const User = require('../models/User')
const Post = require('../models/Post')

// const createContries = (_, { data }) => {
//   const { name, cities, totalStudents, totalSenseis, imgUrl } = data
//   return Country.create({ name, cities, totalStudents, totalSenseis, imgUrl })
//     .then((countries) => {
//       return countries
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

const CreateUser = (_, { data }) => {
  const { name, email, level, password } = data
  console.log(data)
  return User.create({ name, email, level, password })
    .then((user) => {
      return user
    })
    .catch((err) => {
      console.log(err)
    })
}

const CreatePost = (_, { data }) => {
  const { name, email, level, password } = data
  console.log(data)
  return Post.create({ name, email, level, password })
    .then((user) => {
      return user
    })
    .catch((err) => {
      console.log(err)
    })
}

const UpdateUserPost = (_, { data }) => {
  const { id, posts } = data
  // findOneAndUpdate
  return User.findByIdAndUpdate({ _id: id }, { $set: { posts } })
    .then((userUpdated) => userUpdated)
}

module.exports = {
  CreateUser,
  UpdateUserPost
}
