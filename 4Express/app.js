const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let friends = ["Seema", "Monsoon", "Ruchira"];

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/addfriend", function(req, res) {
  let newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function(req, res) {  
  res.render("friends", {friends: friends});
});

app.listen(3000, function() {
  console.log("I am here. Listening on port 3000");
});