const express = require("express");
const router = express.Router();
const moogoose = require('mongoose');
const passport = require("passposrt");
const TodoList = require("../../models/TodoList");
const validateList = require("../../validation/list");


router.get("/todoList", (req, res) => {
  TodoList.find()
    .sort({ data: -1 })
    .then((todoLists) => res.json(todoLists))
    .catch((err) => res.status(400).json(err));
});

router.get("/user/:user_id/todoList", (req, res) => {
    TodoList.find({user: req.params.user_id})
    .then((todoLists)=>res.json(todoLists))
    .catch((err)=> res.status(400).json(err));
});

router.get("/todoList/:id", (req, res) => {
  TodoList.findById(req.params.id)
    .then((todoList) => res.json(todoList))
    .catch((err) => res.status(400).json(err));
});

router.post(
  "/todoList",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateList(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    TodoList.findOne({ email: req.body.name }).then((todoList)=>{
      if(todoList){
        return res
        .status(400)
        .json({todoList: "This list already exist"})
      }else{
    const newTodoList = new TodoList({
      name: req.body.name,
      user: req.user.id,
      movie: req.movie.id,
    });
  }
})
    newTodoList.save().then((todoList) => res.json(todoList));
  }
);