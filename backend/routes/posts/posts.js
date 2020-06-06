const posts = require('express').Router();

const { getPosts, getPostId, addPost, deletePost } = require('../../queries/posts/posts');

posts.get("/", getPosts);

posts.get("/:id", getPostId);

posts.post("/", addPost);

posts.delete("/:id", deletePost);

module.exports = posts;