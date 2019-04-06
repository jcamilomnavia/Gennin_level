const { userAction, postAction } = require('../actions')

const { authAction } = require('../actions')

const hello = (_, { name }) => `Hello ${name || 'World'}`

const Sum = (_, { value1, value2 }) => (value1 + value2)

const SearchUser = (_, args) => userAction.searchUserByEmail(args.email)

const User = (_, args) => userAction.user(args.id)

const Users = (_) => userAction.users()

const Posts = (_) => postAction.posts()

const login = (_, args) => {
  return authAction.login(args.email, args.password)
    .then(token => token)
    .catch((err) => { console.log(`user not exist err ${err}`) })
}

module.exports = {
  hello,
  Sum,
  User,
  Users,
  SearchUser,
  Posts,
  login
}
