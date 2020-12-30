const express = require("express");
const router = express.Router();
const moogoose = require("mongoose");
const Movie = require('../../models/Movie')

//get all the movie (includes other users)
router.get("/movie", (req, res) => {
  Movie.find()
    .sort({ data: -1 })
    .then((movies) => res.json(Object.values(movies).slice(req.index, req.index + 10)))
    // .then((movies) => res.json(movies))
    .catch((err) => res.status(400).json(err));
});

//get specific movie
router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => res.json(movie))
    .catch((err) => res.status(400).json(err));
});

//create movie
router.post(
  "/movie", (req, res) => {
    Movie.find({ apiId: req.body.id }).then((movie) => {
      if (movie) {
        return;
      } else {
        const newMovie = new Movie({
          apiId: req.body.id,
          name: req.body.name,
        });
      }
    })
    newMovie.save().then((todoList) => res.json(todoList));
  }
);

module.exports = router;