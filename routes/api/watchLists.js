const express = require("express");
const router = express.Router();
const moogoose = require('mongoose');
const passport = require("passposrt");
const WatchedList = require("../../models/WatchedList");
const validateList = require("../../validation/list");


router.get("/watchedList", (req, res) => {
  WatchedList.find()
    .sort({ data: -1 })
    .then((watchedLists) => res.json(watchedLists))
    .catch((err) => res.status(400).json(err));
});

router.get("/user/:user_id/watchedList", (req, res) => {
    WatchedList.find({user: req.params.user_id})
    .then((watchedLists)=>res.json(watchedLists))
    .catch((err)=> res.status(400).json(err));
});

router.get("/watchedList/:id", (req, res) => {
  WatchedList.findById(req.params.id)
    .then((watchedList) => res.json(watchedList))
    .catch((err) => res.status(400).json(err));
});

router.post(
  "/watchedList",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateList(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newWatchedList = new WatchedList({
      name: req.body.name,
      user: req.user.id,
      movie: req.movie.id,
    });

    newWatchedList.save().then((watchedList) => res.json(watchedList));
  }
);