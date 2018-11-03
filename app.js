const express = require("express");
const app = express();

// "/" => "Hi there!"

app.get("/", function(req, res) {
  res.send("Hi there!");
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res) {
  res.send("Goodbye");
});

// "/dog" => "Woof Woof"
app.get("/dog", function(req, res) {
  console.log("Someone has made a request to /dog");
  res.send("Woof Woof");
});

app.get("/r/:subredditName", function(req, res) {
  let subreddit = req.params.subredditName.toUpperCase();
  res.send(`Welcome to a ${subreddit}`);
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  console.log(req.params);
  res.send("demomstrating ")
})

// get request to any url other than those defined. This must be after all the other routes
app.get("*", function(req, res) {
  res.send("You are a star!!!");
});


app.listen(3000, function() {
  console.log("Serving demo on port 3000");
});