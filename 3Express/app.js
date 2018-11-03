const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
  let thing = req.params.thing;  
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
  let posts =[
    {title: "how to become a web developed", author: "Colt"},
    {title: "Life", author: "Deepali"},
    {title: "Be a good friend", author: "Harrry Potter"},
  ];
  res.render("posts", {posts: posts});
});

app.get("*", function(req, res) {
  res.render("other");
});

app.listen(3000, function() {
  console.log("port 3000");
});