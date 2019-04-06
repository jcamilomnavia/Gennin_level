const { userAction, postAction, authAction } = require('../actions')

const { getUserId } = require("../utils")

const signUp = (_, args) => authAction.signup(args.data)

const CreateUser = (_, args) => userAction.createUser(args.data)
const UpdateUser = (_, args) => userAction.updateUser(args.id, args.data)

const CreatePost = (_, args) => postAction.createPost(args.data)
const UpdatePost = (_, args) => postAction.updatePost(args.id, args.data)

const AddPost = (_, args) => userAction.addPost(args.id, args.post)

module.exports = {
  signUp,
  CreateUser,
  UpdateUser,
  CreatePost,
  UpdatePost,
  AddPost
}
