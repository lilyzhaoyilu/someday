const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const passport = require("passport");
const WatchedList = require("../../models/WatchedList");
const validateList = require("../../validation/list");

////"/api/watchedLists"
router.get("/watchedList", (req, res) => {
  WatchedList.find()
    .sort({ date: -1 })
    .then((watchedLists) => res.json(watchedLists))
    .catch((err) => res.status(400).json(err));
});

router.get("/user/:user_id/watchedList", (req, res) => {
  WatchedList.find({ user: req.params.user_id })
    .then((watchedLists) => res.json(watchedLists))
    .catch((err) => res.status(400).json(err));
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
      user: req.body.user,
      movie: req.body.movie,
    });

    newWatchedList.save().then((watchedList) => res.json(watchedList));
  }
);

router.patch(
  "/watchedList/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    WatchedList.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name, movie: req.body.movie }, { new: true })
      .then((watchedList) => res.json(watchedList))
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  }
);

//detele todoList
router.delete(
  "/watchedList/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    WatchedList.deleteOne({ _id: req.params.id })
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


//get list by the matching an movie id in the movie array
router.get("/:movieId", (req, res) => {
  // console.log("watchedlist", req)
  WatchedList.find({movie: {$all:[req.params.movieId]}})
    // .sort({ date: -1 })
    .then((historylists) => res.json(historylists))
    .catch((err) => res.status(400).json(err));
});




module.exports = router;
