const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const db = require('./config/keys').mongoURI;
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const todoLists = require("./routes/api/todoLists");
const watchedLists = require("./routes/api/watchedLists");
const movies = require("./routes/api/movies");
const search = require("./routes/api/search");
const comments = require("./routes/api/comments");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("./api/todoLists", todoLists);
app.use("./api/watchLists", watchedLists);
app.use("./api/search", search);
app.use("./api/movies", movies);
app.use("./api/comments", comments)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
