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


app.listen(3000, function() {
  console.log("Serving demo on port 3000");
});