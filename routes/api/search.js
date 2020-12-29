const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const TodoList = require("../../models/TodoList");
const WatchedList = require("../../models/WatchedList");

router.get("/search", (req, res) => {
  let name = req.params.name;
  const tList = TodoList.find({ name: name });
  const wList = WatchedList.find({ name: name });
  const searchQuery = req.query.searchQuery;
  if (searchQuery != null || tList != null || wList != null) {
    Promise.all([tList, wList, searchQuery]).then((values) => {
      res.status(200).json(values);
    });
  } else {
    res.json({ search: "no match result" });
  }
});
