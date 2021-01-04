const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const passport = require("passport");
const WatchedList = require("../../models/WatchedList");
const validateList = require("../../validation/list");

router.get("/watchedList", (req, res) => {
  WatchedList.find()
    .sort({ data: -1 })
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


// delete one media from the list
router.delete(
  "/watchedList/:id/:movieId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("watchlist api req", req);
    WatchedList.updateOne({ _id: req.params.id }, { $pullAll: {movie: [req.params.deletemovie] }})
      .then(() => {
        res.status(200).json({
          message: "media has been deleted!",
        });
      })
      .catch((error) => {
        res.status(400).json({ error: error });
      });
  }
);

module.exports = router;
