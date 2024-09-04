const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

module.exports = app;
