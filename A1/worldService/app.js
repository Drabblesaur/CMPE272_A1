const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

app.get("/world", (req, res) => {
  res.send("World");
});

module.exports = app;
