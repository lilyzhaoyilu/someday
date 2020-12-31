const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const passport = require("passport");
const TodoList = require("../../models/TodoList");
const validateList = require("../../validation/list");
const jwt = require('jsonwebtoken');

//get all the todolist (includes other users)
router.get("/todoList", (req, res) => {
  TodoList.find()
    .sort({ data: -1 })
    .then((todoLists) => res.json(todoLists))
    .catch((err) => res.status(400).json(err));
});

//get all of this user's todolists
router.get("/user/:user_id/todoList", (req, res) => {
  TodoList.find({ user: req.params.user_id })
    .then((todoLists) => res.json(todoLists))
    .catch((err) => res.status(400).json(err));
});

//get specific todolist
router.get("/todoList/:id", (req, res) => {
  TodoList.findById(req.params.id)
    .then((todoList) => res.json(todoList))
    .catch((err) => res.status(400).json(err));
});

//create todolist
router.post(
  "/todoList",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateList(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTodoList = new TodoList({
      name: req.body.name,
      user: req.user.id,
      movie: req.movie.id,
    });
    newTodoList.save().then((todoList) => res.json(todoList));
  }
);

//update todolist
router.patch(
  "/todoList/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateList(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // const newTodoList = new TodoList({
    //   _id: req.params.id,
    //   name: req.body.name,
    //   user: req.user.id,
    //   movie: req.body.movie,
    // });
    TodoList.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name, movie: req.body.movie }, { new: true })
      .then((todoList) => res.json(todoList))
      // .then(() => {
      //   res.status(201).json({
      //     message: "Todo List updated successfully!",
      //   });
      // })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  }
);

//detele todoList
router.delete(
  "/todoList/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    TodoList.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Todo List Deleted!",
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  }
);

module.exports = router;
