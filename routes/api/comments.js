const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const passport = require("passport");
const Comment = require("../../models/Comment");
const validateComment = require("../../validation/comments");

//get all comments from one movie
router.get("/movie/:movie_id/comment", (req, res) => {
  Comment.find({ user: req.params.movie_id })
    .sort({ data: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json(err));
});

//get all user's comments
router.get("/user/:user_id/comments", (req, res) => {
  // console.log("comment userid", req)
  Comment.find({ user: req.params.user_id })
    .sort({ data: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json(err));
});

//get all todolist comments
router.get("/todoList/:todoList_id/comment", (req, res) => {
  Comment.find({ todoList: req.params.todolist_id })
    .sort({ data: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json(err));
});

//get all watchedlist comments
router.get("/watchedList/:watchedList_id/comment", (req, res) => {
  Comment.find({ watchedList: req.params.watchedlist_id })
    .sort({ data: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json(err));
});

//get specific comment
router.get("/comment/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json(err));
});

//create comment
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateComment(req.body);
    

    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    // console.log(req);
    //TODO: need to add movie, reply, todolist and watchlist based on the routes or id...?
    const newComment = new Comment({
      text: req.body.text,
      user: req.user.id,
      movie: req.body.movieId ? req.body.movieId : null,
      // reply: req.body.reply.id ? req.reply.id : null,
      // todoList: req.todoList.id ? req.todoList.id : null,
      // watchedList: req.body.watchedList.id ? req.watchedList.id : null,
    });
    newComment.save().then((comment) => res.json(comment));
  }
);

//detele comment
router.delete(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Comment.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Comment Deleted!",
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  }
);

module.exports = router;