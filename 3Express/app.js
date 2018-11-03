const express = require('express');
const app = express();

app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
  let thing = req.params.thing;
  res.render(`love.ejs`, {thingVar: thing});
});

app.listen(3000, function() {
  console.log("I am listening on port 3000");
});