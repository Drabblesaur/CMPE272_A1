const express = require("express");

const app = express();

app.get("/world", (req, res) => {
  res.send("World");
});

module.exports = app;
