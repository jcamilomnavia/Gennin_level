const Post = require('../models/Post')

const createPost = (data) => {
  const { title, content } = data
  return Post.create({ title, content })
    .then((user) => user)
    .catch((err) => { console.log(err) })
}

const updatePost = (id, data) => {
  return Post.findByIdAndUpdate(id, { $set: data }, { new: true })
    .then((postUpdated) => postUpdated)
}

module.exports = {
  createPost,
  updatePost
}
