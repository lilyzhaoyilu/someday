const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const TodoList = require("../../models/TodoList");
const WatchedList = require("../../models/WatchedList");

router.get("/search/list", (req, res) => {
  let search = req.body.list;
  let regSearch = new RegExp(search, 'i')
  const tList = TodoList.find({ name: regSearch });
  const wList = WatchedList.find({ name: regSearch });
  if (tList != null || wList != null) {
    Promise.all([tList, wList]).then((values) => {
      res.status(200).json(values);
    });
  } else {
    res.json({ search: "no match result" });
  }
});

// router.get("/search/movie", (req, res) => {
//   const searchQuery = req.body.searchQuery;
//   if (searchQuery != null) {
//     searchQuery.then((values) => {
//       res.status(200).json(values);
//     });
//   } else {
//     res.json({ search: "no match result" });
//   }
// });

router.get("/search/handle", (req, res) => {
  let search = req.body.handle;
  let regSearch = new RegExp(search, 'i')
  const users = User.find({ handle: regSearch });
  if (users != null) {
    users.then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  } else {
    res.json({ search: "no match result" });
  }
});
module.exports = router;