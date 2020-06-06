const db = require("../../db/index");

const getPosts = async (req, res, next) => {
    try {
        let posts = await db.any(`SELECT * FROM posts`);
        res.status(200).json({
            status: "Success",
            message: "all posts",
            payload: posts
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Couldn't get all posts",
            payload: err
        })
        next()
    }
}

const getPostId = async (req, res, next) => {
    try {
        let post = await db.one(`SELECT * FROM posts WHERE id = '${req.params.id}'`);
        res.status(200).json({
          status: "Success",
          message: "post retrieved by id",
          payload: post
        });
      } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Couldn't get post by id",
            payload: err
        })
        next(err);
      }
}

const addPost = async (req, res, next) => {
    try {
        let user = await db.one(
            `INSERT INTO posts (user_id, title, body, picture) VALUES('${req.body.user_id}', '${req.body.title}', '${req.body.body}', '${req.body.picture}') RETURNING *`)
        res.status(200).json({
            user,
            status: "Success",
            message: "Added post"
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Post not added",
            payload: err
        })
        next()
    }
}

const deletePost = async (req, res, next) => {
    try {
        await db.none(`DELETE from posts WHERE id = ${req.params.id}`);
        res.status(200).json({
          status: "Success",
          message: "Post Has Been Deleted"
        });
      } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Post not deleted",
            payload: err
        })
        next(err);
      }
}



module.exports = { getPosts, getPostId, addPost, deletePost };