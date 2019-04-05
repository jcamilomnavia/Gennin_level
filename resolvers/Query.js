const Country = require('../models/Country')
const mock = require('../mock')
const UserSchema = require('../models/User')
const Post = require('../models/Post')

const { authAction } = require('../actions')

const hello = (_, { name }) => `Hello ${name || 'World'}`

const Sum = (_, { value1, value2 }) => (value1 + value2)

// const User = (_, { data }) => ({ name: data.name, lastName: data.lastName, email: data.email })

// const Users = (_) => mock

const SearchUser = (_, { key }) => mock.filter((user) => user.name.includes(key))

const Countries = (_) => {
  return Country.find().exec()
    .then((countries) => {
      return countries
    })
    .catch((err) => {
      console.log(err)
    })
}

const User = (_, { id }) => {
  return UserSchema.findOne({ _id: id }).exec()
    .populate({ path: 'posts' }).exec()
    .then((user) => {
      return user
    })
    .catch((err) => {
      console.log(`user not exist err ${err}`)
    })
}

const Users = (_) => {
  return UserSchema.find()
  // { path: 'histories', populate: { path: 'places' } }
    .populate({ path: 'posts' }).exec()
    .then((users) => users)
    .catch((err) => {
      console.log(`user not exist err ${err}`)
    })
}

const Posts = (_) => {
  return Post.find().exec()
    .then((users) => users)
    .catch((err) => {
      console.log(`user not exist err ${err}`)
    })
}

const login = (_, args) => {
  return authAction.login(args.email, args.password)
    .then(user => user)
    .catch((err) => {
      console.log(`user not exist err ${err}`)
    })
}

module.exports = {
  hello,
  Sum,
  User,
  Users,
  SearchUser,
  Countries,
  Posts,
  login
}
