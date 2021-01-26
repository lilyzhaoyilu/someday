const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const TodoList = require("../../models/TodoList");
const WatchedList = require("../../models/WatchedList");
const User = require("../../models/User")

router.get('/all', (req, res) => {
  let search = req.body.search;
  let regSearch = new RegExp(search, 'i');
  const result = [];
  result.push(
    TodoList.find({ name: regSearch }).sort({ date: -1 }),
    WatchedList.find({ name: regSearch }).sort({ date: -1 }),
    User.find({ handle: regSearch }).sort({ date: -1 }),
  );
  Promise.all(result).then(results => res.status(200).json(results));
})

router.get("/search/todoList", (req, res) => {
  let search = req.body.list;
  let regSearch = new RegExp(search, 'i')
  const tList = TodoList.find({ name: regSearch });
  if (tList != null) {
    tList.then((values) => {
      res.status(200).json(values);
    });
  } else {
    res.json({ search: "no match result" });
  }
});

router.get("/search/watchedList", (req, res) => {
  let search = req.body.list;
  let regSearch = new RegExp(search, "i");

  const wList = WatchedList.find({ name: regSearch });
  if (wList != null) {
    wList.then((values) => {
      res.status(200).json(values);
    });
  } else {
    res.json({ search: "no match result" });
  }
});

router.get("/search/handle", (req, res) => {
  let search = req.body.handle;
  let regSearch = new RegExp(search, 'i')
  // console.log("regSearch")
  const users = User.find({ handle: regSearch });
  if (users != null) {
    users.then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  } else {
    res.json({ search: "no match result" });
  }
});
module.exports = router;