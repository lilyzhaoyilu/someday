const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require('./config/keys').mongoURI;

app.get("/", (req, res) => res.send("Hello World"));
const users = require("./routes/api/users");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));