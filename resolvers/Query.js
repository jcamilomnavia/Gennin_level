const { userAction, postAction } = require('../actions')

const hello = (_, { name }) => `Hello ${name || 'World'}`

const Sum = (_, { value1, value2 }) => (value1 + value2)

const SearchUser = (_, args) => userAction.searchUserByEmail(args.email)

const User = (_, args) => userAction.user(args.id)

const Users = (_) => userAction.users()

const Posts = (_) => postAction.posts()

module.exports = {
  hello,
  Sum,
  User,
  Users,
  SearchUser,
  Posts
}
